<template>
  <div class="content">
    <div class="wrap">
      <transition-group>
        <div class="item" v-for="item in list">
          {{item}}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, markRaw, reactive, ref, onActivated, onDeactivated } from 'vue'
import Card from '../../components/Card/index.vue'

import Dialog from '../../components/Dialog/index.vue'
// import A from '../../components/A/index.vue' 
import Login from '../../components/Login/index.vue'
import Register from '../../components/Register/index.vue'
let name = ref<string>('footer')



const list = reactive<number[]>([1,2,3,4,5])



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

  wrap {
    display: flex;
    flex-wrap: wrap;
    
  }


}
</style>