<template>
  <div class="layout">
    <Menu />
    <div class="layout-right">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import { reactive, ref } from 'vue'

// 我们需要拿一下子组件的实例，首先通过ref
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;

  &-right {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid #ccc;
  }
}
</style>
