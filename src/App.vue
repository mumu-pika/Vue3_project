<template>
  <div>
    pika 历史记录
  </div>
  <div>
    <!-- path -->
    <button @click="toPage('/')">Login</button>
    <button @click="toPage('/register')">Register</button>

    <!-- 历史记录前进和后退 -->
    <button @click="next()">next</button>
    <button @click="prev()">prev</button>

  </div>
  <hr>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const toPage = (url: string) => {
  router.push(url)
}

const next = () => {
  // Router.go(delta: number): void
  // 参数表示跳转的步数
  router.go(1)
}

const prev = () => {
  // 相当于 router.go(-1)
  router.back()
}

</script>
<style>
</style>