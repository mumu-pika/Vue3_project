<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// const message:string = "冒险！"
// const message:string = "xixi, adf, dfa,asdf"
// const Arr: Array<string> = ["1", "2", "3"]
// Arr.splice(2, 0, 'pika')
// 通过ref包装的值会变为响应式
import {ref, Ref, isRef, shallowRef, triggerRef, customRef} from 'vue'
// let message = ref<string>("皮卡")
// let message:Ref<string> = ref("皮卡")

// let message2 = shallowRef({
//   name: 'pika',
//   age: 18
// })

let message = shallowRef({
  name: 'pika',
  age: 12
})

function MyRef<T>(value:T) {
  return customRef((track, trigger) => {
    // track收集依赖
    return {
      get() {
        track()
        return value
      },
      set(newValue:T) {
        console.log("set")
        value = newValue
        trigger()
      }
    }
  })
}

let message2 = MyRef<string>("xixi")

const changeMsg = () => {
  // message.value = 'change msg'
  console.log(isRef(message))
  // message2.value.name = 'saber'
  message.value.name = 'saber'
  triggerRef(message)
  message2.value = 'yoyo'
}


</script>

<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{message}}</div>
    <div>{{message2}}</div>
    <!-- <div>{{message2.name}}</div> -->
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
