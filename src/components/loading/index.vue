<template>
  <div v-if="isShow" class="loading">
    <div class="loading-content">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let isShow = ref<boolean>(false);

// 显示的回调
const show = () => {
  isShow.value = true;
};

// 隐藏的回调
const hide = () => {
  isShow.value = false;
};
// 暴露出去
defineExpose({
  isShow,
  show,
  hide,
});

// 上面两个函数之后会出现在创建的虚拟DOM的setupState上面，之后我们就需要将这两个函数挂载到全局
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  // inset属性用作定位元素top、right、bottom、left这些属性的简写。
  // inset: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  &-content {
    font-size: 30px;
    color: #fff;
  }
}
</style>
