<template>
  <div class="A">
    <h1>A组件</h1>
    <!-- <slot></slot> -->
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
// 这里样式没有生效，我们需要借助插槽选择器，:slotted()
// :slotted(.a) {
//   color: hotpink;
// }

.A {
  width: 200px;
  height: 200px;
  color: #eee;
  background-color: skyblue;
}
</style>
