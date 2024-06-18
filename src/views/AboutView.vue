<!--
 * @Author: '得不偿失' '603384836@qq.com'
 * @Date: 2024-04-01 17:27:40
 * @LastEditors: '得不偿失' '603384836@qq.com'
 * @LastEditTime: 2024-06-14 10:20:15
 * @FilePath: \myVue\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (width >= 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

// }
// const count = ref(0)
// 题目描述
// {"a": {"n1": 1, "n2": 3 }, "b": {"n1": 2, "n2": 4}, "c": { "n1": 3,"n2": 5}}
// 转换成{"n1": {"a": 1, "b": 2, "c": 3 }, "n2": { "a": 3, "b": 4, "c": 5}}
// let obj: any = {}
// console.log(obj)
// let data: any = { a: { n1: 1, n2: 3 }, b: { n1: 2, n2: 4 }, c: { n1: 3, n2: 5 } }
// const obj: any = {}
// Object.keys(data).forEach((k) => {
//   const item: any = data[k]
//   Object.keys(item).forEach((subK) => {
//     if (!obj[subK]) {
//       obj[subK] = {}
//     }
//     obj[subK][k] = item[subK]
//   })
// })
// console.log(obj)
</script>
