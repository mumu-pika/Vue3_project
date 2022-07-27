<template>
  <div class="A">
    我是插槽
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
// 这里样式没有生效，我们需要借助插槽选择器，:slotted()
:slotted(.a) {
  color: hotpink;
}

</style>