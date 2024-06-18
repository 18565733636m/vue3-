<!-- // Child.vue 派发 -->
<!-- // 写法一 -->
<!-- // 写法二 -->
<!-- <button @click="handleClick">按钮</buttom> -->
<template>
  <div></div>
  <!-- <button @click="emit('myClick')">按钮</button> -->
  <!-- <button @click="handleClick()">按钮</button> -->
</template>
<script setup>
//  $emit 子传父
// 方法一 适用于Vue3.2版本 不需要引入
import { defineProps, useAttrs } from 'vue'
// const props = defineProps({
//   msg1: String
// })
// 对应写法一
// const emit = defineEmits(['myClick', 'myClick2'])
// const emit = defineEmits(['myClick', '这是发送给父组件的信息'])
// 对应写法二
// const handleClick = () => {
//   emit('myClick', '这是发送给父组件的信息')
// }

// 方法二 不适用于 Vue3.2版本，该版本 useContext()已废弃
// import { useContext } from "vue"
// const { emit } = useContext()
// const handleClick = ()=>{
//     emit("myClick", "这是发送给父组件的信息")
// }

// expose / ref传值
// defineExpose({
//   childName: '这是子组件的属性',
//   someMethod() {
//     console.log('这是子组件的方法')
//   }
// })

// attres 传值
// 方法二 适用于 Vue3.2版本
const attrs = useAttrs()
console.log(attrs) // { msg2:"2222", title: "3333" }
console.log(attrs.msg1)
</script>
