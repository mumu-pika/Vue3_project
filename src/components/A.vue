<template>
  <div class="A">
    <h1>我是A组件</h1>
    <!-- <button @click="emitB">派发一个事件</button> -->
  </div>
</template>

<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
let attr = useAttrs()

console.log(attr)

</script>

<style lang="less" scoped>
  .A {
    width: 200px;
    height: 200px;
    color: #eee;
    background-color: skyblue;
  }
</style>