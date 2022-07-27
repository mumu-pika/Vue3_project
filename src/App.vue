<script setup lang="ts">

const css = useCssModule('xixi')

console.log(css)

// 一般我们会用在tsx的结构中, 类似于下面的结构
// return (<div class={css}></div>)


</script>

<template>
  <div :class="[xixi.pikaCss, xixi.pikaCss2]">
    哈哈哈哈哈哈
  </div>
</template>

<style module="xixi">
.pikaCss {
  color: yellowgreen;
}
.pikaCss2 {
  font-size: 50px;
}

</style>
