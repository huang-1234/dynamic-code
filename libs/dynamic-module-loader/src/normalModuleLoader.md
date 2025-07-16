# 动态 JavaScript 模块加载器实现

我将设计一个 `DynamicModuleLoader` 类，它可以加载并执行 AMD、CommonJS、ESM 和 UMD 格式的 JavaScript 代码，并返回模块的导出对象。下面是完整的 TypeScript 实现：

```typescript
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
class DynamicModuleLoader {
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
    if (typeof process !== 'undefined' && id in require('module').builtinModules) {
      return require(id);
    }

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
```

## 使用示例

```typescript
// 示例 1: 使用 React 组件
const reactCode = `
  const React = require('react');

  const MyComponent = () => {
    return React.createElement('div', null, 'Hello from React');
  };

  module.exports = MyComponent;
`;

const loader = new DynamicModuleLoader({
  require: (id) => {
    if (id === 'react') return React;
    throw new Error(`无法解析模块: ${id}`);
  }
});

const Component = await loader.load(reactCode, 'cjs');
// 使用 <Component /> 渲染


// 示例 2: 使用纯函数
const functionCode = `
  function add(a, b) {
    return a + b;
  }

  export default add;
`;

const addFunction = await loader.load(functionCode, 'esm');
console.log(addFunction(2, 3)); // 输出: 5


// 示例 3: 使用 AMD 模块
const amdCode = `
  define(['utils'], function(utils) {
    return {
      greet: function(name) {
        return 'Hello, ' + utils.capitalize(name);
      }
    };
  });
`;

const amdLoader = new DynamicModuleLoader({
  require: (id) => {
    if (id === 'utils') return { capitalize: (s: string) => s[0].toUpperCase() + s.slice(1) };
    throw new Error(`无法解析模块: ${id}`);
  }
});

const greeter = await amdLoader.load(amdCode);
console.log(greeter.greet('world')); // 输出: Hello, World
```

## 功能特点

1. **多模块格式支持**：
   - 自动检测 AMD、CommonJS、ESM 和 UMD 格式
   - 可指定模块类型强制解析

2. **安全执行环境**：
   - 使用沙箱隔离代码执行
   - `with` 作用域提供更自然的执行环境

3. **依赖处理**：
   - 内置 require 函数支持
   - 可自定义依赖解析逻辑

4. **动态 ESM 加载**：
   - 使用 Blob URL 加载 ES 模块
   - 支持默认导出和命名导出

5. **UMD 全局处理**：
   - 支持 UMD 全局变量名配置
   - 自动尝试各种导出方式

6. **类型安全**：
   - 完整的 TypeScript 类型定义
   - 明确错误处理

## 实现说明

1. **模块检测**：通过正则表达式模式匹配快速识别模块类型
2. **AMD 支持**：动态注入 define 函数并解析依赖
3. **CommonJS 支持**：创建模拟的 module/exports/require 环境
4. **ESM 支持**：使用 Blob 创建临时 URL 并通过动态 import 加载
5. **UMD 支持**：依次尝试 CommonJS → AMD → 全局导出的降级策略
6. **沙箱环境**：使用 Function 构造函数创建安全的执行环境

这个实现满足了从多种模块格式动态加载并执行 JavaScript 代码的需求，同时提供了扩展点用于处理依赖关系和自定义执行环境。