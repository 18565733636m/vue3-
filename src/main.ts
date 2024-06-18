/*
 * @Author: '得不偿失' '603384836@qq.com'
 * @Date: 2024-04-01 17:27:40
 * @LastEditors: '得不偿失' '603384836@qq.com'
 * @LastEditTime: 2024-06-04 15:58:27
 * @FilePath: \myVue\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 入口文件
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import api from '@/api/user'
import { commonAjax } from '@/api/user'
// Vue.protype.$api = api;

// console.log(commonAjax)
const app = createApp(App)
//在Vue 2.0时挂载全局方法及使用
// //main.js文件中引入构造函数，并且挂载在构造函数上
// import Vue from "vue";
// Vue.prototype.$axios = axios;
// //全局调用
// this.axios()

console.log(commonAjax)

// 在vue3.0时挂载全局方法及使用
//挂载方法到实例上
app.config.globalProperties.$api = commonAjax
//全局调用
// import { getCurrentInstance } from 'vue'
// const { proxy }: any = getCurrentInstance()
// proxy.$axios()

console.log('VITE_ENV:', import.meta.env.VITE_ENV)

app.use(createPinia())
app.use(router)

app.mount('#app')
