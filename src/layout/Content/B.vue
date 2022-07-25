<template>
  <div class="header">
    <h2>我是B, 我接收数据</h2>
  </div>
</template>

<script setup lang="ts">
  import { getCurrentInstance } from 'vue'

  // 获取当前组件实例
  const instance = getCurrentInstance()

  // 触发事件，并执行回调
  instance?.proxy?.$Bus.on('on-click', (str)=>{
    console.log(str)
  })

  // 如果我们想监听多条消息，我们可以使用*
  instance?.proxy?.$Bus.on('*', (type, str)=>{
    // type参数会传入事件名
    console.log(type, "---",str, '---')
  })

  // 取消订阅消息
  instance?.proxy?.$Bus.off('on-click',  (str:any) => {
    console.log("事件被删除啦！")
  })

  // 取消所有订阅的事件
  instance?.proxy?.$Bus.all.clear()

</script>

<style lang="less" scoped>
  .header {
    height: 5rem;
    border: 1px solid #eee ;
  }
</style>