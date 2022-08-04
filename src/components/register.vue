<template>
  <button @click="router.back()">返回</button>
  <div class="register">
  <!-- query参数接收 -->
  <!-- <div>name: {{route.query.name}}</div>
  <div>price: {{route.query.price}}</div>
  <div>ID: {{route.query.id}}</div> -->

  <!-- params参数接收 -->
  <div>name: {{route.params.name}}</div>
  <div>price: {{route.params.price}}</div>
  <div>ID: {{route.params.id}}</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

// useRouter()返回router实例
const router = useRouter()

// useRoute()返回当前路由地址
const route = useRoute()
</script>

<style>
  .register {
    background-color: skyblue;
    width: 400px;
    height: 400px;
    font-size: 20px;
    color:white;
  }
</style>