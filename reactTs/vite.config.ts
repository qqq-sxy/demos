import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   // 配置别名@指向src目录
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 8888 // 这里指定你想要的端口号
  }
})
