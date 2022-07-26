<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import layout from './layout/index.vue'

import A from './components/A.vue'

// import useBase64 from './hooks/index'

// useBase64({ el: '#img' }).then(res=>{
//   console.log(res.baseUrl)
// })



</script>

<template>
  <div>
    {{$filters.format('hhhh')}}
  </div>
</template>

<style lang="less">
html, body, #app {
  height: 100%;
  overflow: hidden;
}

</style>
