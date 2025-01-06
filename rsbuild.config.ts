import { defineConfig } from '@rsbuild/core';
import path from 'node:path';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
  html: {
    template: './index.html',
  },
  plugins: [pluginVue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
