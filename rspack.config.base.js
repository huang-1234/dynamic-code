const { defineConfig } = require('@rspack/cli');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
                decorators: true,  // 如果需要装饰器
                dynamicImport: true  // 如果需要动态导入
              },
              target: 'es2022'  // 支持最新语法
            }
          }
        }
      }
    ]
  },
  resolve: {
    extensionAlias: {
      '.js': ['.ts', '.tsx', '.js'],
      '.mjs': ['.mts', '.mjs']
    }
  }
}