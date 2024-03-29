import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        rewrite: path => path.replace(/^\/api/, ''),
      },
      '/vivo': {
        target: 'https://shop.vivo.com.cn',
        rewrite: path => path.replace(/^\/vivo/, ''),
        secure: false,
        headers: {
          Referer: 'https://shop.vivo.com.cn',
          Host: 'shop.vivo.com.cn',
        }
      }
    }
  }
})
