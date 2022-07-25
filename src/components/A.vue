<template>
  <div class="A">
    <button @click="emitB">派发一个事件</button>
  </div>
</template>

<script setup lang="ts">
// 使用自定义Bus
import Bus from '../Bus'
let flag = false

const emitB = () => {
  flag =!flag
  Bus.emit('on-click', flag)
}

</script>

<style lang="less" scoped>
  .A {
    width: 200px;
    height: 200px;
    color: #eee;
    background-color: skyblue;
  }
</style>