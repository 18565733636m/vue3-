/*
 * @Author: '得不偿失' '603384836@qq.com'
 * @Date: 2024-04-01 17:27:40
 * @LastEditors: '得不偿失' '603384836@qq.com'
 * @LastEditTime: 2024-06-03 18:02:10
 * @FilePath: \myVue\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('../views/parent.vue')
    }
  ]
})

export default router
