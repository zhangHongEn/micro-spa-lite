import { fileURLToPath, URL } from 'node:url'
import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    federation({
      name: 'mfe-main',
      manifest: true,
      shared: {
        vue: {
          shareScope: 'mfe-main',
        }
      },
      // 只能统一shareStrategy
      shareStrategy: "loaded-first",
      runtimePlugins: ["./src/preloadPlugin"]
    }),
  ],
  server: {
    open: '/vite-vue-app/home',
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
