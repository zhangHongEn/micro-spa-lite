import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: "vite-vue-app",
      manifest: true,
      exposes: {
        "./main": "./src/main",
      },
      shared: ['vue']
    })
  ],
  base: "https://unpkg.com/vite-vue-app@1.0.0/dist/",
  server: {
    origin: "http://localhost:5001",
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
