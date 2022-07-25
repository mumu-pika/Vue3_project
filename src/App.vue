<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import layout from './layout/index.vue'

// import renderDom from'./App.tsx'

// const getNum = (num:number) => {
//   console.log(num, '我收到啦')
// }


import Dialog from '/src/components/Dialog/index.vue'
import { ref } from 'vue'
let flag = ref<boolean>(true)
let title = ref<string>("我是一只小狗狗")


</script>

<template>
  <!-- <layout/> -->
  <button @click="flag=!flag">change {{flag}}</button>
  <div>标题 {{title}}</div>
  <Dialog v-model:title="title" v-model.pika="flag"/>
  <!-- <renderDom @on-click="getNum" title="我是标题！"></renderDom> -->
</template>

<style lang="less">
html, body, #app {
  height: 100%;
  overflow: hidden;
}


// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.vue:hover {
//   filter: drop-shadow(0 0 2em #42b883aa);
// }
</style>
