<!--
 * @Author: '得不偿失' '603384836@qq.com'
 * @Date: 2024-06-03 17:30:36
 * @LastEditors: '得不偿失' '603384836@qq.com'
 * @LastEditTime: 2024-06-07 16:48:55
 * @FilePath: \myVue\src\views\parent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- // Parent.vue 响应 -->
<template>
  <!-- <child @myClick="onMyClick"></child> -->

  <!-- <child ref="comp"></child>
  <button @click="handlerClick">按钮</button> -->

  <child :msg1="msg1" :msg2="msg2" title="3333"></child>
</template>
<script setup>
import child from './child.vue'
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// // route 对应 Vue2 里的 this.$route
// const route = useRoute()
// // router 对应 Vue2 里的 this.$router
// const router = useRouter()

// console.log(route)
// console.log(router)

const msg1 = ref('1111')
const msg2 = ref('2222')
</script>
