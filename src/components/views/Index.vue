<template>
  <div>
    <h1>Index</h1>
    <h2 @click="toPage('/a')">A组件导航</h2>
    <h2 @click="toPage('/b')">B组件导航</h2>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const toPage = (url: string) => {
  router.push({
    path: url,
  });
};
</script>

<style></style>
