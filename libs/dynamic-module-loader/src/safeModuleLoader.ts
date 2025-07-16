import { type } from "os";

/**
 * 模块依赖关系树结构
 */
type DependencyTree = {
  [key: string]: {
    present: boolean;
    fromGlobal: boolean;
    fromProvided: boolean;
    error?: string;
  };
};

/**
 * UMD 加载器配置选项
 */
interface UMDLoaderOptions {
  /**
   * 预定义的依赖映射
   * 格式: { '模块名': 模块值 }
   */
  dependencies?: Record<string, any>;

  /**
   * 全局对象替代 (用于非浏览器环境)
   * @default globalThis
   */
  global?: any;

  /**
   * 是否从全局对象自动获取依赖
   * @default true
   */
  useGlobalFallback?: boolean;

  /**
   * 当模块需要额外依赖时的回调函数
   * @param moduleName 模块名称
   * @returns 解析后的模块或错误
   */
  resolveDependency?: (moduleName: string) => any;

  /**
   * 严格模式 (缺少依赖时报错而不是尝试获取)
   * @default false
   */
  strictMode?: boolean;
}

/**
 * 依赖注入 UMD 模块加载器
 */
export class UMDModuleLoader {
  private dependencies: Record<string, any> = {};
  private global: any;
  private useGlobalFallback: boolean;
  private resolveDependency?: (moduleName: string) => any;
  private strictMode: boolean;

  constructor(options: UMDLoaderOptions = {}) {
    this.global = options.global || globalThis;
    this.useGlobalFallback = options.useGlobalFallback ?? true;
    this.strictMode = options.strictMode ?? false;
    this.resolveDependency = options.resolveDependency;

    // 内置常用模块的全局名称映射
    this.dependencies = {
      react: 'React',
      'react-dom': 'ReactDOM',
      dayjs: 'dayjs',
      moment: 'moment',
      antd: 'antd',
      '@ant-design/icons': 'icons',
      ...options.dependencies
    };
  }

  /**
   * 加载并执行 UMD 模块
   * @param code UMD 模块代码
   * @param customDeps 额外的自定义依赖
   * @returns 模块导出对象和依赖树
   */
  async load(
    code: string,
    customDeps?: Record<string, any>
  ): Promise<{ module: any; dependencyTree: DependencyTree }> {
    // 创建依赖树
    const dependencyTree: DependencyTree = {};

    // 提取 UMD 模块声明的依赖项
    const umdDeps = this.extractUMDDependencies(code);

    // 解析所有依赖项
    const resolvedDeps = await this.resolveDependencies(
      umdDeps,
      dependencyTree,
      customDeps
    );

    // 创建执行环境
    const sandbox = this.createSandbox(resolvedDeps);

    // 执行 UMD 模块
    const moduleExports = this.executeUMD(code, sandbox, umdDeps);

    return {
      module: moduleExports,
      dependencyTree
    };
  }

  /**
   * 添加或覆盖依赖
   * @param deps 依赖映射 { 模块名: 值 }
   */
  addDependencies(deps: Record<string, any>) {
    this.dependencies = { ...this.dependencies, ...deps };
  }

  /**
   * 从 UMD 代码中提取依赖项
   */
  private extractUMDDependencies(code: string): string[] {
    // UMD 定义的常见模式
    const definePattern = /define\s*\(\s*(?:['"(],)?\s*\[([^\]]+)\]/;
    const factoryPattern = /factory\s*\(\s*([^)]+)\s*\)/;

    let dependencies: string[] = [];

    // 尝试匹配 AMD 风格的依赖声明
    const defineMatch = code.match(definePattern);
    if (defineMatch && defineMatch[1]) {
      dependencies = defineMatch[1]
        .split(',')
        .map(dep => dep.trim().replace(/['"]/g, ''));
      return dependencies.filter(dep => dep !== '');
    }

    // 尝试匹配工厂函数参数
    const factoryMatch = code.match(factoryPattern);
    if (factoryMatch && factoryMatch[1]) {
      dependencies = factoryMatch[1]
        .split(',')
        .map(dep => dep.trim());
    }

    // 尝试匹配 CommonJS 风格的 require
    if (dependencies.length === 0) {
      const requirePattern = /require\((['"])(.+?)\1\)/g;
      let requireMatch;
      while ((requireMatch = requirePattern.exec(code)) !== null) {
        dependencies.push(requireMatch[2]);
      }
    }

    // 去重并返回
    return [...new Set(dependencies)];
  }

  /**
   * 解析所有依赖项
   */
  private async resolveDependencies(
    deps: string[],
    tree: DependencyTree,
    customDeps?: Record<string, any>
  ): Promise<Record<string, any>> {
    const resolved: Record<string, any> = {};

    for (const dep of deps) {
      if (!tree[dep]) {
        tree[dep] = {
          present: false,
          fromGlobal: false,
          fromProvided: false
        };
      }

      // 1. 检查自定义依赖 (当前调用传入)
      if (customDeps?.[dep]) {
        resolved[dep] = customDeps[dep];
        tree[dep].present = true;
        tree[dep].fromProvided = true;
        continue;
      }

      // 2. 检查预定义依赖
      if (this.dependencies[dep]) {
        // 如果是字符串且以window.开头，解析为全局变量
        if (typeof this.dependencies[dep] === 'string' &&
            this.dependencies[dep].startsWith('window.')) {
          const path = this.dependencies[dep].split('.');
          let value = this.global;
          for (const p of path.slice(1)) {
            value = value?.[p];
          }
          if (value !== undefined) {
            resolved[dep] = value;
            tree[dep].present = true;
            tree[dep].fromGlobal = true;
            continue;
          }
        } else {
          resolved[dep] = this.dependencies[dep];
          tree[dep].present = true;
          tree[dep].fromProvided = true;
          continue;
        }
      }

      // 3. 检查解析回调
      if (this.resolveDependency) {
        try {
          resolved[dep] = this.resolveDependency(dep);
          tree[dep].present = true;
          tree[dep].fromProvided = true;
          continue;
        } catch (e) {
          tree[dep].error = `resolveDependency 失败: ${e instanceof Error ? e.message : String(e)}`;
        }
      }

      // 4. 检查全局回退
      if (this.useGlobalFallback) {
        const globalValue = this.findGlobalDependency(dep);
        if (globalValue !== undefined) {
          resolved[dep] = globalValue;
          tree[dep].present = true;
          tree[dep].fromGlobal = true;
          continue;
        }
      }

      // 5. 严格模式报错
      if (this.strictMode) {
        tree[dep].error = `无法解析依赖: ${dep}`;
      } else {
        resolved[dep] = null; // 作为空依赖传递
        tree[dep].present = true; // 标记为存在但为null
        tree[dep].error = `依赖 ${dep} 不存在，已传入 null`;
      }
    }

    return resolved;
  }

  /**
   * 在全局对象中查找可能的依赖
   */
  private findGlobalDependency(dep: string): any {
    // 直接查找全局对象
    if (this.global[dep] !== undefined) {
      return this.global[dep];
    }

    // 查找camelCase变体 (例如 my-package -> myPackage)
    const camelCaseDep = dep.replace(/-([a-z])/g, g => g[1].toUpperCase());
    if (this.global[camelCaseDep] !== undefined) {
      return this.global[camelCaseDep];
    }

    // 查找首字母大写的版本 (例如 react-dom -> ReactDOM)
    const capitalizedDep = dep.replace(/(?:^|-)([a-z])/g, g => g.slice(-1).toUpperCase());
    if (this.global[capitalizedDep] !== undefined) {
      return this.global[capitalizedDep];
    }

    return undefined;
  }

  /**
   * 创建执行沙箱环境
   */
  private createSandbox(deps: Record<string, any>): Record<string, any> {
    const sandbox = Object.create(null);

    // 注入依赖
    for (const [name, value] of Object.entries(deps)) {
      sandbox[name] = value;
    }

    // 创建模拟的AMD环境
    sandbox.define = (
      dependencies: string[],
      factory: (...args: any[]) => any
    ) => {
      const resolvedDeps = dependencies.map(dep => {
        if (dep === 'exports') return {};
        if (dep === 'module') return { exports: {} };
        if (dep === 'require') return (id: string) => deps[id] || this.findGlobalDependency(id);
        return deps[dep];
      });

      return factory(...resolvedDeps);
    };
    sandbox.define.amd = {};

    // 模拟CommonJS环境
    sandbox.exports = {};
    sandbox.module = { exports: sandbox.exports };
    sandbox.require = (id: string) => deps[id] || this.findGlobalDependency(id);

    // 添加全局引用
    sandbox.window = this.global;
    sandbox.global = this.global;
    sandbox.self = this.global;

    return sandbox;
  }

  /**
   * 执行UMD代码并获取导出
   */
  private executeUMD(
    code: string,
    sandbox: Record<string, any>,
    dependencies: string[]
  ): any {
    try {
      // 创建函数并绑定沙箱环境
      const executor = new Function(`
        // 捕获模块导出
        const __umdExports = {};

        // 定义模块加载相关方法
        ${this.getUMDShimCode(dependencies)}

        try {
          ${code}
        } catch (e) {
          throw new Error('模块执行失败: ' + e.message);
        }

        // 返回模块导出
        return (
          __umdExports.exports ||
          __umdExports.module?.exports ||
          __umdExports.returnValue ||
          __umdExports.globalExport
        );
      `);

      // 应用沙箱变量
      const contextKeys = Object.keys(sandbox);
      const contextValues = contextKeys.map(key => sandbox[key]);

      const wrappedExecutor = executor.bind(null);
      return wrappedExecutor(...contextValues);
    } catch (error) {
      throw new Error(`执行UMD模块失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * 获取UMD兼容层代码
   */
  private getUMDShimCode(deps: string[]): string {
    return `
      // 捕获AMD导出
      const __originalDefine = window.define;
      const __amdExports = {};
      window.define = function(deps, factory) {
        if (typeof deps === 'function') {
          __amdExports.exports = deps();
        } else {
          const resolvedDeps = deps.map(dep => {
            try {
              if (dep === 'exports') return {};
              if (dep === 'module') return { exports: {} };
              return eval(dep);
            } catch (e) {
              console.warn('无法解析依赖:', dep);
              return null;
            }
          });
          __amdExports.exports = factory(...resolvedDeps);
        }
      };
      window.define.amd = true;

      // 捕获CommonJS导出
      const __originalExports = exports;
      const __originalModule = module;

      // 捕获全局变量导出
      window.${this.dependencies.__globalExport || 'MY_MODULE'} = null;
    `;
  }

  /**
   * 诊断依赖问题
   * @param dependencyTree 依赖树
   * @returns 诊断报告
   */
  getDiagnosticReport(dependencyTree: DependencyTree): string {
    const reportLines: string[] = [];
    const problems: string[] = [];

    // 统计信息
    let total = 0;
    let resolved = 0;
    let unresolved = 0;

    for (const [dep, info] of Object.entries(dependencyTree)) {
      total++;
      if (info.present && !info.error) {
        resolved++;
      } else {
        unresolved++;
      }

      let status = '';
      if (info.error) {
        status = `❌ 错误: ${info.error}`;
        problems.push(`依赖问题: ${dep} - ${info.error}`);
      } else if (info.present) {
        if (info.fromGlobal) {
          status = `✔ 已从全局作用域加载`;
        } else if (info.fromProvided) {
          status = `✔ 已通过依赖注入加载`;
        } else {
          status = `✔ 已加载 (来源未知)`;
        }
      } else {
        status = '❓ 未加载';
        problems.push(`依赖缺失: ${dep} 未提供或加载`);
      }

      reportLines.push(`${dep.padEnd(20)} ${status}`);
    }

    // 添加总结
    reportLines.unshift(`= 依赖诊断报告 =`.padEnd(50, '='));
    reportLines.push(`= 解析统计: 总数=${total}, 已解析=${resolved}, 未解析=${unresolved}`.padEnd(50, '='));

    if (problems.length > 0) {
      reportLines.push('', '= 待解决问题 =');
      problems.forEach(p => reportLines.push(`• ${p}`));
      reportLines.push('', '解决方案:');
      reportLines.push('1. 添加缺失的依赖到 loader.addDependencies()');
      reportLines.push('2. 配置 resolveDependency 回调');
      reportLines.push('3. 确保依赖在全局可访问 (例如通过 script 标签)');
    }

    return reportLines.join('\n');
  }
}
export default UMDModuleLoader;