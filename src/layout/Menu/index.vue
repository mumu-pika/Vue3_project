<template>
  <div class="menu">
    <h2>我是Menu</h2>
    <Tree :data="data" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Tree from "../../components/Tree/index.vue";

type TreeList = {
  name: string;
  icon?: string;
  children?: TreeList[] | [];
};

const data = reactive<TreeList[]>([
  {
    name: "001",
    children: [
      {
        name: "001-001",
        children: [
          {
            name: "001-001-001",
          },
        ],
      },
    ],
  },
  {
    name: "002",
    children: [
      {
        name: "002-001",
      },
    ],
  },
  {
    name: "003",
  },
  {
    name: "004",
    children: [],
  },
]);
</script>

<style lang="less" scoped>
.menu {
  width: 10rem;
}
</style>
