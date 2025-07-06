import { defineConfig } from 'rspress/config';

export default defineConfig({
  // 文档根目录
  root: 'docs',
  title: 'Lite Store React',
  description: 'Lite Store React',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        content: 'https://github.com/dc-js/lite-store-react',
        mode: 'link'
      }
    ]
  }
});