<template>
  <div>
    <header class="header">
      <slot name="header">
      </slot>
    </header>
    <main class="main">
      <div v-for="(item,index) in data">
        <!-- 这里可以通过插槽，将子组件的数据传递给父组件，让父组件来定义其结构 -->
        <slot :index="index" :data="item"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer">
      </slot>
    </footer>
  </div>
</template>

<script setup lang="ts">

import {reactive} from 'vue'

type names = {
  name: string,
  age: number
}

// 子组件定义一个响应式数据
const data = reactive<names[]>([
  {
    name: 'pika1',
    age: 200
  },
  {
    name: 'pika2',
    age: 201
  },
  {
    name: 'pika3',
    age: 202
  }
])


</script>

<style lang="less" scoped>
.header {
  height: 100px;
  background-color: red;
  color: #fff;
}

.main {
  height: 200px;
  background-color: green;
  color: #fff;
}

.footer {
  height: 100px;
  background-color: blue;
  color: #fff;
}
</style>