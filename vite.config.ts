/*
 * @Author: '得不偿失' '603384836@qq.com'
 * @Date: 2024-04-01 17:27:41
 * @LastEditors: '得不偿失' '603384836@qq.com'
 * @LastEditTime: 2024-06-16 16:46:16
 * @FilePath: \myVue\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
// import cfg from '@/config'

import { resolve } from 'path' // 主要用于alias文件路径别名
// 加别名的函数
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'env',
  plugins: [vue(), vueJsx(), VueDevTools()], // 配置需要使用的插件列表，这里将vue添加进去
  resolve: {
    // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '/@': pathResolve('src'),
      '/config': pathResolve('public/config'),
      '/com': pathResolve('src/components')
    }
  },
  // base: 'vue3-blog', // 便于发布到gitee
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  // 本地运行配置，及反向代理配置
  server: {
    // host: true, //访问子网IP
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      '/api': {
        target: 'https://jkt.bsoft.com.cn', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/hcn-web-bdsz': {
        target: 'https://jkt.bsoft.com.cn/hcn-web-bdsz', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
