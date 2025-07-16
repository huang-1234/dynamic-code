import { defineConfig } from 'rspress/config';

import { pluginPlayground } from '@rspress/plugin-playground';

const { pluginNodePolyfill } = require('@rsbuild/plugin-node-polyfill');
export default defineConfig({
  // 文档根目录
  root: 'docs',
  title: 'Lite Store React',
  description: 'Lite Store React',
  plugins: [pluginPlayground() as any, pluginNodePolyfill()],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        content: 'https://github.com/dc-js/dc',
        mode: 'link'
      }
    ]
  }
});