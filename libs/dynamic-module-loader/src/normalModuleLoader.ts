/**
 * JavaScript 模块类型
 */
type ModuleType = 'amd' | 'cjs' | 'esm' | 'umd' | 'unknown';

/**
 * 模块加载器配置选项
 */
interface ModuleLoaderOptions {
  /**
   * 用于解析依赖项的自定义 require 函数
   * @default 返回全局模块或抛出错误
   */
  require?: (id: string) => any;

  /**
   * 要注入的全局变量
   */
  globals?: Record<string, any>;

  /**
   * UMD 模块的全局变量名
   */
  umdGlobalName?: string;
}

/**
 * 动态 JavaScript 模块加载器
 */
export class DynamicModuleLoader {
  // 默认 require 实现
  private require: (id: string) => any;
  // 注入的全局变量
  private globals: Record<string, any>;
  // UMD 模块使用的全局变量名
  private umdGlobalName?: string;

  constructor(options: ModuleLoaderOptions = {}) {
    this.require = options.require || this.defaultRequire;
    this.globals = options.globals || {};
    this.umdGlobalName = options.umdGlobalName;
  }

  /**
   * 加载并执行 JavaScript 代码
   * @param code JavaScript 代码字符串
   * @param type 模块类型 (可选: 自动检测)
   * @returns 模块导出对象
   */
  async load(code: string, type?: ModuleType): Promise<any> {
    const detectedType = type || this.detectModuleType(code);

    switch (detectedType) {
      case 'amd':
        return this.execAMD(code);
      case 'cjs':
        return this.execCJS(code);
      case 'esm':
        return this.execESM(code);
      case 'umd':
        return this.execUMD(code);
      default:
        return this.execGlobal(code);
    }
  }

  /**
   * 自动检测模块类型
   */
  private detectModuleType(code: string): ModuleType {
    if (/define\s*\(\s*\[.*]\s*,/.test(code) || /define\s*\(\s*function\s*\(/.test(code)) {
      return 'amd';
    }
    if (/exports\.\w+\s*=/.test(code) || /module\.exports\s*=/.test(code) || /require\(['"]/.test(code)) {
      return 'cjs';
    }
    if (/export\s+(default\s+)?(function|const|let|var)\s+\w+/.test(code) || /import\s+/.test(code)) {
      return 'esm';
    }
    if (/typeof define\s*===.*function.*?\s*&&\s*define\.amd/.test(code) || /root\..+\s*=\s*/.test(code)) {
      return 'umd';
    }
    return 'unknown';
  }

  /**
   * 默认 require 实现
   */
  private defaultRequire(id: string): any {
    // 尝试使用全局 require
    if (typeof globalThis.require === 'function') {
      return globalThis.require(id);
    }

    // 尝试加载核心 Node.js 模块
    // if (typeof process !== 'undefined' && id in require('module').builtinModules) {
    //   return require(id);
    // }

    throw new Error(`无法解析依赖: ${id}. 请提供自定义 require 函数.`);
  }

  /**
   * 创建一个安全的执行上下文
   */
  private createSandbox(): Record<string, any> {
    const sandbox = Object.create(null);

    // 注入全局变量
    Object.keys(this.globals).forEach(key => {
      sandbox[key] = this.globals[key];
    });

    return sandbox;
  }

  /**
   * 执行 AMD 模块
   */
  private async execAMD(code: string): Promise<any> {
    const sandbox = this.createSandbox();

    // AMD 模块导出的结果
    let amdExports: any;

    // 定义 define 函数
    sandbox.define = (deps: string[], factory: (...args: any[]) => any) => {
      if (!Array.isArray(deps)) deps = [];

      // 解析依赖
      const resolvedDeps = deps.map(dep => {
        if (dep === 'require') return (id: string) => this.require(id);
        if (dep === 'exports') return {};
        if (dep === 'module') return { exports: {} };
        return this.require(dep);
      });

      // 执行工厂函数获取导出
      amdExports = factory(...resolvedDeps);
    };

    // 标识为 AMD 环境
    sandbox.define.amd = {};

    // 执行代码
    this.runInSandbox(code, sandbox);

    return amdExports;
  }

  /**
   * 执行 CommonJS 模块
   */
  private async execCJS(code: string): Promise<any> {
    const sandbox = this.createSandbox();

    // 创建模块对象
    const moduleObj: any = { exports: {} };

    // 创建上下文
    sandbox.module = moduleObj;
    sandbox.exports = moduleObj.exports;
    sandbox.require = (id: string) => this.require(id);

    // 执行代码
    this.runInSandbox(code, sandbox);

    return moduleObj.exports;
  }

  /**
   * 执行 ES 模块
   */
  private async execESM(code: string): Promise<any> {
    // 创建临时模块 URL
    const blob = new Blob([code], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);

    try {
      // 动态导入模块
      const module = await import(/* @vite-ignore */ url);

      // 支持默认导出和命名导出
      if (typeof module?.default !== 'undefined') {
        return module.default;
      }
      return module;
    } catch (error) {
      throw new Error(`无法加载 ES 模块: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  /**
   * 执行 UMD 模块
   */
  private async execUMD(code: string): Promise<any> {
    try {
      // 先尝试作为 CommonJS 模块
      return await this.execCJS(code);
    } catch {
      try {
        // 再尝试作为 AMD 模块
        return await this.execAMD(code);
      } catch {
        // 最后尝试从全局对象获取
        return this.execGlobal(code);
      }
    }
  }

  /**
   * 执行全局脚本
   */
  private async execGlobal(code: string): Promise<any> {
    const sandbox = this.createSandbox();

    // 执行代码
    this.runInSandbox(code, sandbox);

    // 尝试获取 UMD 全局导出
    if (this.umdGlobalName && typeof sandbox[this.umdGlobalName] !== 'undefined') {
      return sandbox[this.umdGlobalName];
    }

    // 尝试获取模块导出
    if (typeof sandbox.module?.exports !== 'undefined') {
      return sandbox.module.exports;
    }

    // 尝试获取导出对象
    if (typeof sandbox.exports !== 'undefined') {
      return sandbox.exports;
    }

    // 返回整个沙箱
    return sandbox;
  }

  /**
   * 在沙箱中安全执行代码
   */
  private runInSandbox(code: string, sandbox: Record<string, any>): void {
    try {
      // 创建上下文
      const context = Object.keys(sandbox);
      const values = context.map(key => sandbox[key]);

      // 执行代码
      const executor = new Function(...context, `with(this) { ${code} }`);
      executor.apply(sandbox, values);
    } catch (error) {
      throw new Error(`执行失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

export default DynamicModuleLoader;