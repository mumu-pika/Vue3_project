<template>
  <div class="content">
    <Suspense>
      <template #default>
        <A></A>
      </template>
      <template #fallback>
        <div>
          loading...
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, markRaw, reactive, ref } from 'vue'
import Card from '../../components/Card/index.vue'

import Dialog from '../../components/Dialog/index.vue'
// import A from '../../components/A/index.vue' 

let name = ref<string>('footer')


// 异步组件
const A = defineAsyncComponent(() => import("../../components/A/index.vue"))


</script>

<style lang="less" scoped>
.content {
  // display: flex;
  // flex: 1;
  margin: 1rem;
  border: 1px solid #eee;
  overflow: auto;

  &-items {
    padding: 1rem;
    border: 1px solid #bfa;
  }

  .tab {
    display: flex;
    height: 2rem;
    margin: 1rem;
    border: 1px solid skyblue;
    div {
      font-size: 0.8rem;
      margin: 0.5rem;
      background-color: #bfa;
      cursor: pointer;
    }
  }
}
</style>