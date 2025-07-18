import { defineConfig } from 'rspress/config';

// import { pluginPlayground } from '@rspress/plugin-playground';

export default defineConfig({
  // 文档根目录
  root: 'docs',
  title: 'rsbuild-react-demo',
  description: 'rsbuild-react-demo',
  // plugins: [pluginPlayground() as any],
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