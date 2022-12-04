import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    //中转服务器 https://i.maoyan.com
    proxy: {
      '/path': {
        target: 'https://i.maoyan.com', //替换的服务端地址
        changeOrigin: true, //允许跨域，开启代理
        rewrite: (path) => path.replace(/^\/path/, ''), //设置重写的路径
      },
    },
  },
})
