<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";

// 生命周期
console.log("set up");

const count = ref(0);

onBeforeMount(() => {
  let div = document.querySelector("#happy");
  console.log("创建之前 ===  onBeforeMount", div); //这个时候DOM还没有渲染完毕
});

onMounted(() => {
  let div = document.querySelector("#happy");
  console.log("组件渲染完毕 === onMounted", div);
});

onBeforeUpdate(() => {
  let div = document.querySelector("#happy");
  console.log("状态更新前 === onBeforeUpdate", div);
});

onUpdated(() => {
  let div = document.querySelector("#happy");
  console.log("状态更新后 === onUpdated", div);
});

onBeforeMount(() => {
  let div = document.querySelector("#happy");
  console.log("卸载之前 === onBeforeMount", div);
});

onMounted(() => {
  let div = document.querySelector("#happy");
  console.log("卸载之后 === onMounted", div);
});
</script>

<template>
  <div id="happy">happy!!</div>
  <div>{{ count }}</div>
  <div @click="count++">点我+1</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
