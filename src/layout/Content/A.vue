<template>
  <div class="header">
    <h2>我是A, 我来传递消息</h2>
    <button @click="emit">emit</button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

// 获取当前组件实例
const instance = getCurrentInstance()

const emit = () => {
  instance?.proxy?.$Bus.emit('on-click', 'xixi')
}
</script>

<style lang="less" scoped>
.header {
  height: 5rem;
  border: 1px solid #eee;
}
</style>
