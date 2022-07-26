<template>
  <div v-if="isShow" class="loading">
    <div class="loading-content">Loading...</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  let isShow = ref<boolean>(false)

  const show = () => {
    isShow.value = true
  }

  const hide = () => {
    isShow.value = false
  }


</script>

<style lang="less" scoped>
  .loading {
    position: fixed;
    // inset属性用作定位元素top、right、bottom、left这些属性的简写。
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
      font-size: 30px;
      color: #fff ;
    }
  }
</style>