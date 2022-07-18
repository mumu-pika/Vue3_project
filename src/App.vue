<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// const message:string = "冒险！"
// const message:string = "xixi, adf, dfa,asdf"
// const Arr: Array<string> = ["1", "2", "3"]
// Arr.splice(2, 0, 'pika')
// 通过ref包装的值会变为响应式
import {ref, Ref, isRef, shallowRef, triggerRef, customRef, watch, reactive, watchEffect} from 'vue'
// let message = ref<string>("皮卡")
// let message:Ref<string> = ref("皮卡")

// let message2 = shallowRef({
//   name: 'pika',
//   age: 18
// })


let message = ref<string>('hello')
let message2 = ref<string>('hi')

// 如果是ref需要手动开启deep才能深度监视，对于reactive不用，默认为深度watch了
let message3 = reactive({
  bar: {
    foo: 'lala',
    name: 'pika'
  }
})

// watch([message, message2, message3], (newValue, oldValue) => {
//   console.log("新的", newValue)
//   console.log("旧的", newValue)
// }, {
//   // 第三个参数对于多层的需要开启deep配置项
//   deep: true
// })

// watch(() => message3.bar.name, (newValue, oldValue) => {
//   // 对于多参数会输出多个
//   console.log("新的", newValue)
//   console.log("旧的", newValue)
// }, {
//   // 第三个参数对于多层的需要开启deep配置项
//   deep: true
// })


// watch (() => message3.bar.name, (newVal, oldVal) => {
//   // console.log("新的", newVal)
//   // console.log("旧的", oldVal)
//   console.log("变化啦", newVal == oldVal)
// })

watchEffect((oninvalidate)=>{
  oninvalidate(()=>{
    
  })
})

const changeMsg = () => {

}


</script>

<template>
  <div>
    <button @click="changeMsg">change</button>
    <!-- <input v-model="message" type="text">
    <input v-model="message2" type="text">
    <input v-model="message3.bar.foo" type="text"> -->
    <input v-model="message3.bar.name" type="text">

  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
