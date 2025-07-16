import { defineConfig } from '@rslib/core';

const { pluginNodePolyfill } = require('@rsbuild/plugin-node-polyfill');


export default defineConfig({

  plugins: [pluginNodePolyfill()],
  lib: [
    {
      format: 'esm',
      syntax: ['node 18'],
      dts: true,
    },
    {
      format: 'cjs',
      syntax: ['node 18'],
    },
  ],
});
