<template>
  <div>
    <div v-for="(item, index) in list">{{ item.name }}---{{ index }}</div>
  </div>
</template>

<script setup lang="ts">
import { axios } from './server'

// 这里因为setup 语法糖所以不用写async
const list = await axios('./data.json')

console.log('@@', list)
</script>

<style lang="less" scoped></style>
