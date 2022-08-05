<template>
  <button @click="router.back()">返回</button>
  <div class="register">
  <!-- query参数接收 -->
  <div>name: {{route.query.name}}</div>
  <div>price: {{route.query.price}}</div>
  <div>ID: {{route.query.id}}</div>

  <!-- params参数接收 -->
  <div>name: {{route.params.name}}</div>
  <div>price: {{route.params.price}}</div>
  <div>ID: {{route.params.id}}</div>

  <!-- 动态路由接收 -->
  <div>name: {{item?.name}}</div>
  <div>price: {{item?.price}}</div>
  <div>ID: {{item?.id}}</div>
  </div>
</template>

<script setup lang="ts">
import { data } from './list.json'
import { useRouter, useRoute } from 'vue-router';

// useRouter()返回router实例
const router = useRouter()

// useRoute()返回当前路由地址
const route = useRoute()

// find会返回符合条件的对象, 注意这里params的类型RouteParams是字符串类型
const item =  data.find(v => v.id === Number(route.params.id))

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