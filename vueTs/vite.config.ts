import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 7474
  },
  // 配置别名@指向src目录
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
})
