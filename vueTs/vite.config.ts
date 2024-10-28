import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名@指向src目录
  resolve: {
    alias: {
      '@': '/src'
    }
  },
})
