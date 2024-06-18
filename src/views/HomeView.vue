<!--
 * @Author: '得不偿失' '603384836@qq.com'
 * @Date: 2024-04-01 17:27:40
 * @LastEditors: '得不偿失' '603384836@qq.com'
 * @LastEditTime: 2024-06-18 22:58:15
 * @FilePath: \myVue\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <main>
    <div>{{ count }}</div>
    <div>{{ data.key }}</div>
    <TheWelcome />
    <h1>This is an home page</h1>
    <button @click="add()">{{ count }}</button>
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {
  onMounted,
  onUnmounted,
  reactive,
  ref,
  h,
  getCurrentInstance,
  nextTick,
  defineComponent,
  toRefs,
  toRef,
  watch
} from 'vue'
import { useRouter } from 'vue-router'
import { commonAjax } from '../api/user'
import Item from 'antd/es/list/Item'
//全局调用
// const { proxy }: any = getCurrentInstance()
// proxy.$api()
// console.log(proxy.$api())
// import { useBaseStore } from '@/store/pinia'
// 也有人这么用，一个组件里所有的属性全部定义在一个对象里，有点 Vue2 data 的味道
const data = reactive({
  name: '沐华',
  age: 18,
  key: 1
})
const { name, age, key } = toRefs(data)

const router = useRouter()
console.log(router)
let count = ref(2)

let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 }
]

onMounted(() => {
  // test({ name: 'jack' })
  // getData()
  // const images = document.querySelectorAll('h1')
  // console.log(images)
  const list = [
    { name: '小明', age: 18 },
    { name: '小红', age: 19 },
    { name: '小李', age: 20 }
  ]
  // console.log(maxBy(list, 'age'))
  // curry(dynamicAdd, 10)
  // let add = curry(dynamicAdd, 10)
  // console.log(add(5))
})

/**高阶函数
 * 根据求值条件判断数组中最大的项
 * @param {Array} arr 数组
 * @param {String|Function} iteratee 返回一个求值表达式，可以根据对象属性的值求出最大项，比如item.age。也可以通过自定义函数返回求值表达式。
 */
// const maxBy = (arr: any[], iteratee: String | Function) => {
//   let values = []
//   if (typeof iteratee === 'string') {
//     values = arr.map((item) => item[iteratee])
//   } else if (typeof iteratee === 'function') {
//     values = arr.map((item, index) => {
//       return iteratee(item, index, arr)
//     })
//   }
//   const maxOne = Math.max(...values)
//   const maxIndex = values.findIndex((item) => item === maxOne)
//   return arr[maxIndex]
// }

// 柯里化函数
// 在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。

// 一个求和函数dynamicAdd()
// function dynamicAdd() {
//   return [...arguments].reduce((prev, curr) => {
//     return prev + curr
//   }, 0)
// }
// 现在需要通过柯里化把它变成一个新的函数，这个新的函数预置了第一个参数，并且可以在调用时继续传入剩余参数。
// 看到这，我觉得有点似曾相识，预置参数的特性与bind很相像。那么我们不如用bind的思路来实现。

function curry(fn: any | Function) {
  // 保存预置参数
  var presetArgs = [].slice.call(arguments, 1)
  // 返回一个新函数
  return function () {
    // 新函数调用时会继续传参
    var restArgs = [].slice.call(arguments)
    // 参数合并，通过apply调用原函数
    return fn.apply(this, [...presetArgs, ...restArgs])
  }
}

// 回调函数接收一个参数，为清除副作用的函数
watch([key], (newKey, oldKey, onInvalidate) => {
  console.log('沐华')
  // 获取DOM默认获取到的是更新前的dom，如果是flush: post，可以获取到更新后的dom
  console.log('DOM节点：')
  // console.log('DOM节点：', dom.innterHTML)
  onInvalidate(() => {
    console.log(2222)
  })
})

//添加
const add = () => {
  count.value++
  data.key++
}

//请求接口参数
const getData = () => {
  console.log('commonAjax', commonAjax)
  let params: any = []
  commonAjax(JSON.stringify(params), 'hcn.applyCopyService', 'recipientAddressList').then((res) => {
    if (res.code == 200) {
      console.log(1111)
    } else {
      console.log(222)
    }
  })
}

onUnmounted(() => {
  console.log('onUnmounted')
})
</script>
: any[]: string | number(: { [x: string]: any }): any: any(: number)
