import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginPlayground } from '@rspress/plugin-playground';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'My Site',
  icon: '/rspress-icon.png',
  plugins: [pluginPlayground({
    defaultDirection: 'vertical',
    monacoOptions: {
      language: 'typescript',
      theme: 'vs-dark',
      wordBreak: 'normal',
      cursorWidth: 10,
      wordWrap: 'on'
    }
  }) as any],
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
