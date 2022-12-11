<template>
  <div class="content">
    <A></A>
    <B></B>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import {
  defineAsyncComponent,
  markRaw,
  reactive,
  ref,
  onActivated,
  onDeactivated,
  watch,
  getCurrentInstance,
} from "vue";
import Card from "../../components/Card/index.vue";

import Dialog from "../../components/Dialog/index.vue";
import Login from "../../components/Login/index.vue";
import Register from "../../components/Register/index.vue";

import A from "./A.vue";
import B from "./B.vue";

import _ from "lodash"; // 如果lodash报错需要安装ts声明文件库 npm i --save-dev @types/lodash

let name = ref<string>("footer");

const num = reactive({
  current: 0,
  tweenedNumber: 0,
});

watch(
  () => num.current,
  (newValue, oldValue) => {
    // 产生过渡
    gsap.to(num, {
      duration: 1,
      tweenedNumber: newValue,
    });
  }
);

let instance = getCurrentInstance();
console.log(instance);
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

  .wrap {
    display: flex;
    flex-wrap: wrap;
    width: calc(30px * 10);
    .item {
      width: 30px;
      height: 30px;
      // text-align: center;
      // line-height: 30px;
      border: 1px solid #bfa;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .move {
      transition: all 1s;
    }
  }
}
</style>
