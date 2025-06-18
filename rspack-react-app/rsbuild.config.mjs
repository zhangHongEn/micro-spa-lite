import { rspack } from '@rsbuild/core';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 5002,
  },
  output: {
    // You need to set a unique value that is not equal to other applications
    uniqueName: 'rspack_react_app',
    // publicPath must be configured if using manifest
    publicPath: 'http://localhost:5002/',
    // 仅dev时设置assetPrefix
    assetPrefix: process.env.NODE_ENV === 'development' ? 'http://localhost:5002/' : 'https://zhanghongen.github.io/micro-spa-lite/rspack_react_app/dist/',
  },
  plugins: [
    pluginReact(),
    new pluginModuleFederation({
      name: 'rspack_react_app',
      manifest: true,
      exposes: {
        './main': './src/main',
      },
      shared: ['react', 'react-dom'],
    })
  ],
});
