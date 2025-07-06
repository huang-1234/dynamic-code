import { defineConfig } from '@rsbuild/core';

import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';
export default defineConfig({
  output: {
    target: 'web',
  },
  mode: 'development',
  resolve: {
    alias: {
      'lite-store-react': path.resolve(__dirname, 'src')
    }
  },
  plugins: [pluginReact({
    reactRefreshOptions: {
      overlay: false,
    },
  })],
  source: {
    tsconfigPath: './tsconfig.json',
  },
  lib: [
    {
      format: 'esm',
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
    },
    {
      format: 'cjs',
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
    },
  ],
});