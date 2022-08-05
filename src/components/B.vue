<template>
  <div class="B">
    <h1>B组件</h1>
    <!-- {{Flag}} -->
  </div>
</template>

<script setup lang="ts">
// 使用自定义Bus
// import Bus from '../Bus'
// import {ref} from 'vue'
// let Flag = ref(false)
// Bus.on("on-click", (flag:boolean)=>{
//   Flag.value = flag
// })

</script>

<style lang="less" scoped>
  .B {
    width: 200px;
    height: 200px;
    color: #eee;
    background-color: orangered;
  }
</style>