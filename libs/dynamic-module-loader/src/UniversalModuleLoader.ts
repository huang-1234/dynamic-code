interface ModuleLoaderOptions {
  dependencies?: Record<string, any>;
  globalObject?: any;
  strictMode?: boolean;
  globalExportNames?: string[];
}

interface DependencyInfo {
  name: string;
  resolved: boolean;
  source: 'injected' | 'global' | 'resolved' | 'placeholder';
  value: any;
  error?: string;
}

class UniversalModuleLoader {
  private dependencies: Record<string, any>;
  private globalObject: any;
  private strictMode: boolean;
  private globalExportNames: string[];
  private sandboxCache = new Map<Window, HTMLIFrameElement>();
  private moduleCache = new Map<string, any>();

  constructor(options: ModuleLoaderOptions = {}) {
    this.dependencies = options.dependencies || {};
    this.globalObject = options.globalObject || window;
    this.strictMode = options.strictMode || false;
    this.globalExportNames = options.globalExportNames || ['moduleExports'];

    // 初始化常用库的默认全局名称
    this.initializeDefaultDependencies();
  }

  private initializeDefaultDependencies() {
    const defaultDeps: Record<string, string> = {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': 'ReactRouterDOM',
      'dayjs': 'dayjs',
      'moment': 'moment',
      'lodash': '_',
      'antd': 'antd',
      '@ant-design/icons': 'icons',
      'axios': 'axios',
      'rxjs': 'rxjs'
    };

    for (const [name, globalName] of Object.entries(defaultDeps)) {
      if (!this.dependencies[name]) {
        this.dependencies[name] = globalName;
      }
    }
  }

  setDependencies(deps: Record<string, any>) {
    this.dependencies = { ...this.dependencies, ...deps };
  }

  addDependency(name: string, value: any) {
    this.dependencies[name] = value;
  }

  detectModuleType(code: string): 'amd' | 'cjs' | 'esm' | 'umd' | 'global' {
    if (/define\s*\(\s*\[/.test(code) || /define\.amd/.test(code)) {
      return 'amd';
    }

    if (/module\.exports\s*=/.test(code) || /exports\.\w+\s*=/.test(code)) {
      return 'cjs';
    }

    if (/export\s+(default\s+)?(function|const|let|var|class)/.test(code) ||
        /import\s+/.test(code)) {
      return 'esm';
    }

    if (/typeof define\s*===.*function.*?\s*&&\s*define\.amd/.test(code) ||
        /typeof exports\s*===?\s*["']object["']/.test(code) ||
        /root\..+\s*=\s*/.test(code)) {
      return 'umd';
    }

    if (/(window|global|self)\.[\w$]+\s*=/.test(code)) {
      return 'global';
    }

    return 'umd'; // 默认为 UMD
  }

  extractDependencies(code: string): string[] {
    const patterns = [
      /define\s*\(\s*\[([^\]]+)\]/g,        // AMD 依赖
      /require\(['"]([^'"]+)['"]\)/g,       // CommonJS require
      /factory\s*\(\s*([^)]+)\s*\)/g,       // 工厂函数参数
      /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g, // ESM 导入
      /export\s+.*?\s+from\s+['"]([^'"]+)['"]/g // ESM 重导出
    ];

    const dependencies = new Set<string>();

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(code)) !== null) {
        if (pattern === patterns[0] || pattern === patterns[2]) {
          // AMD 或工厂函数参数：逗号分隔的列表
          match[1].split(',').forEach(dep => {
            const cleaned = dep.trim().replace(/['"]/g, '');
            if (cleaned) dependencies.add(cleaned);
          });
        } else {
          // 其他情况：单个依赖
          dependencies.add(match[1]);
        }
      }
    }

    return Array.from(dependencies).filter(dep =>
      !['require', 'exports', 'module'].includes(dep)
    );
  }

  resolveDependency(name: string): DependencyInfo {
    const result: DependencyInfo = {
      name,
      resolved: false,
      source: 'placeholder',
      value: null
    };

    try {
      // 1. 检查注入的依赖
      if (this.dependencies[name] !== undefined) {
        const depValue = this.dependencies[name];

        // 如果是字符串，可能是全局变量路径
        if (typeof depValue === 'string') {
          if (depValue.startsWith('global.')) {
            const path = depValue.split('.');
            let value = this.globalObject;
            for (const part of path.slice(1)) {
              value = value?.[part];
            }
            if (value !== undefined) {
              result.value = value;
              result.resolved = true;
              result.source = 'global';
              return result;
            }
          } else {
            result.value = depValue;
            result.resolved = true;
            result.source = 'injected';
            return result;
          }
        }

        // 直接使用提供的值
        result.value = depValue;
        result.resolved = true;
        result.source = 'injected';
        return result;
      }

      // 2. 尝试全局查找
      const globalValue = this.findGlobalDependency(name);
      if (globalValue !== undefined) {
        result.value = globalValue;
        result.resolved = true;
        result.source = 'global';
        return result;
      }

      // 3. 严格模式报错
      if (this.strictMode) {
        result.error = `未解析的依赖: ${name}`;
        return result;
      }

      // 4. 使用空值占位
      result.value = null;
      result.resolved = true;
      result.source = 'placeholder';
      result.error = `依赖 ${name} 未提供，已传入 null`;
      return result;
    } catch (error) {
      result.error = `解析依赖失败: ${error instanceof Error ? error.message : String(error)}`;
      return result;
    }
  }

  private findGlobalDependency(name: string): any {
    // 1. 原始名称
    if (this.globalObject[name] !== undefined) {
      return this.globalObject[name];
    }

    // 2. 驼峰命名 (my-package -> myPackage)
    const camelCase = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    if (this.globalObject[camelCase] !== undefined) {
      return this.globalObject[camelCase];
    }

    // 3. 首字母大写 (react-dom -> ReactDOM)
    const capitalized = name.replace(/(?:^|-)([a-z])/g, (match) =>
      match.slice(-1).toUpperCase()
    );
    if (this.globalObject[capitalized] !== undefined) {
      return this.globalObject[capitalized];
    }

    // 4. 点分隔路径 (antd.Button -> window.antd.Button)
    if (name.includes('.')) {
      const parts = name.split('.');
      let value = this.globalObject;
      for (const part of parts) {
        value = value?.[part];
        if (value === undefined) break;
      }
      return value;
    }

    return undefined;
  }

  private createSandbox(): Window {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const sandbox = iframe.contentWindow!;
    this.sandboxCache.set(sandbox, iframe);

    // 注入基本环境
    // @ts-ignore
    sandbox.console = {
      log: (...args: any[]) => console.log('[SANDBOX]', ...args),
      warn: (...args: any[]) => console.warn('[SANDBOX]', ...args),
      error: (...args: any[]) => console.error('[SANDBOX]', ...args),
      info: (...args: any[]) => console.info('[SANDBOX]', ...args),
      debug: (...args: any[]) => console.debug('[SANDBOX]', ...args)
    };

    return sandbox;
  }

  private releaseSandbox(sandbox: Window) {
    const iframe = this.sandboxCache.get(sandbox);
    if (iframe) {
      document.body.removeChild(iframe);
      this.sandboxCache.delete(sandbox);
    }
  }

  private executeInSandbox(sandbox: Window, code: string, dependencies: Record<string, any>): any {
    try {
      // 注入依赖
      Object.entries(dependencies).forEach(([name, value]) => {
        // @ts-ignore
        sandbox[name] = value;
      });

      // 创建执行函数
      const executor = new Function(`
        // 捕获模块导出
        const __capturedExports = {};

        // 模拟 AMD 环境
        const __originalDefine = define;
        define = function(deps, factory) {
          if (typeof deps === 'function') {
            __capturedExports.amd = deps();
          } else {
            const resolvedDeps = deps.map(dep => {
              if (dep === 'require') return require;
              if (dep === 'exports') return {};
              if (dep === 'module') return { exports: {} };
              return this[dep];
            });
            __capturedExports.amd = factory(...resolvedDeps);
          }
        };
        define.amd = {};

        // 模拟 CommonJS 环境
        const __originalModule = module;
        const __originalExports = exports;
        const module = { exports: {} };
        const exports = module.exports;

        // 模拟全局环境
        ${this.globalExportNames.map(name => `
          this.${name} = null;
        `).join('\n')}

        try {
          // 执行模块代码
          ${code};

          // 捕获 CommonJS 导出
          if (module.exports && Object.keys(module.exports).length > 0) {
            __capturedExports.cjs = module.exports;
          }

          // 捕获全局导出
          ${this.globalExportNames.map(name => `
            if (this.${name} !== null) {
              __capturedExports.global = this.${name};
            }
          `).join('\n')}

          return __capturedExports;
        } finally {
          // 恢复原始环境
          define = __originalDefine;
          module = __originalModule;
          exports = __originalExports;
        }
      `);

      // 执行并返回结果
      return executor.call(sandbox);
    } catch (error) {
      throw new Error(`沙箱执行失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async loadESM(code: string): Promise<any> {
    const blob = new Blob([code], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);

    try {
      const module = await import(/* @vite-ignore */ url);
      return module.default || module;
    } catch (error) {
      throw new Error(`ESM 加载失败: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async loadAMD(code: string, dependencies: Record<string, any>): Promise<any> {
    const sandbox = this.createSandbox();

    try {
      const exports = this.executeInSandbox(sandbox, code, dependencies);
      return exports.amd;
    } finally {
      this.releaseSandbox(sandbox);
    }
  }

  async loadCJS(code: string, dependencies: Record<string, any>): Promise<any> {
    const sandbox = this.createSandbox();

    try {
      const exports = this.executeInSandbox(sandbox, code, dependencies);
      return exports.cjs;
    } finally {
      this.releaseSandbox(sandbox);
    }
  }

  async loadUMD(code: string, dependencies: Record<string, any>): Promise<any> {
    const sandbox = this.createSandbox();

    try {
      const exports = this.executeInSandbox(sandbox, code, dependencies);
      return exports.amd || exports.cjs || exports.global;
    } finally {
      this.releaseSandbox(sandbox);
    }
  }

  async loadGlobal(code: string, dependencies: Record<string, any>): Promise<any> {
    const sandbox = this.createSandbox();

    try {
      const exports = this.executeInSandbox(sandbox, code, dependencies);
      return exports.global;
    } finally {
      this.releaseSandbox(sandbox);
    }
  }

  async load(code: string, type?: 'amd' | 'cjs' | 'esm' | 'umd' | 'global'): Promise<any> {
    const detectedType = type || this.detectModuleType(code);
    const dependencies = this.extractDependencies(code);

    // 解析所有依赖
    const resolvedDeps: Record<string, any> = {};
    const dependencyInfo: DependencyInfo[] = [];

    for (const dep of dependencies) {
      const info = this.resolveDependency(dep);
      resolvedDeps[dep] = info.value;
      dependencyInfo.push(info);
    }

    // 检查未解析的依赖
    const unresolved = dependencyInfo.filter(info => !info.resolved);
    if (unresolved.length > 0 && this.strictMode) {
      const missing = unresolved.map(info => info.name).join(', ');
      throw new Error(`缺少依赖: ${missing}`);
    }

    // 根据类型加载模块
    switch (detectedType) {
      case 'esm':
        return this.loadESM(code);
      case 'amd':
        return this.loadAMD(code, resolvedDeps);
      case 'cjs':
        return this.loadCJS(code, resolvedDeps);
      case 'umd':
        return this.loadUMD(code, resolvedDeps);
      case 'global':
        return this.loadGlobal(code, resolvedDeps);
      default:
        throw new Error(`未知模块类型: ${detectedType}`);
    }
  }

  getDependencyReport(dependencies: string[]): string {
    const report: string[] = ['= 依赖解析报告 ='];
    let resolvedCount = 0;
    let unresolvedCount = 0;

    for (const dep of dependencies) {
      const info = this.resolveDependency(dep);

      let status: string;
      if (info.resolved) {
        resolvedCount++;
        status = `✔ 已解析 (来源: ${info.source})`;
      } else {
        unresolvedCount++;
        status = `❌ 未解析: ${info.error || '未知错误'}`;
      }

      report.push(`${dep.padEnd(25)} ${status}`);
    }

    report.push(`= 总结: 已解析 ${resolvedCount}, 未解析 ${unresolvedCount} =`);

    if (unresolvedCount > 0) {
      report.push('\n建议操作:');
      report.push('1. 使用 loader.addDependency() 添加缺失依赖');
      report.push('2. 检查全局对象是否包含所需依赖');
      report.push('3. 禁用严格模式以使用空值占位');
    }

    return report.join('\n');
  }
}