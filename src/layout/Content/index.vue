<template>
  <div class="content">
        <!-- <div class="content-items" v-for="item in 20" :key="item" >
          {{item}}
          <Card :content="`我是第${item}个`"></Card>
        </div> -->
        <div class="tab" v-for="item in data" :key="item.name">
          {{item.name}}
        </div>
        <component :is="current.comName"></component>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Card from '../../components/Card/index.vue';

import A from './A.vue' 
import B from './B.vue'

// 定义数据类型
type Tabs = {
  name: string,
  comName: any
}

// Com选取
type Com = Pick<Tabs,'comName'>




const data = reactive<Tabs[]>([
  {
    name: 'A组件',
    comName: 'A'
  },
  {
    name: 'B组件',
    comName: 'B'
  },

])


let current = reactive<Com>({
  // 设置默认的展示
   comName: data[0].comName
})


</script>

<style lang="less" scoped>
  .content {
    display: flex;
    flex: 1;
    margin: 1rem;
    border: 1px solid #eee;
    overflow: auto;
    &-items {
      padding: 1rem;
      border: 1px solid #bfa;
    }
    .tab {
      flex-direction: column;
      margin: 1rem;
      border: 1px solid skyblue;
    }
  }
</style>