<template>
  <div>
    <div style="margin-left: 10px" v-for="(item, index) in data" :key="index">
      {{ item.name }}
      <TreeItem v-if="item?.children?.length" :data="item.children" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import TreeItem from '../Tree/index.vue'

type TreeList = {
  name: string;
  icon?: string;
  children?: TreeList[] | [];
};

type Props = {
  data?: TreeList[];
};

defineProps<Props>();
</script>

<!-- 递归组件实现方式二，与方式一相比的改动在于为这个组件设定一个name并暴露出去（也就是Vue2的写法） -->
<script lang="ts">
export default {
  name: "TreeItem",
};
</script>

<style lang="less" scoped></style>
