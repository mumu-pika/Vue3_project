<template>
  <div class="loading">
    <!-- <h1>loading</h1> -->
    <div ref="bar" class="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
let speed = ref<number>(1)
let bar = ref<HTMLElement>()

// 标记requestAnimationFrame
let timer = ref<number>(0)

// 开始时的进度条
const startLoading = () => {
  let dom = bar.value as HTMLElement
  speed.value = 1
  // requestAnimationFrame默认执行一次，所以需要递归这个函数
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 100) {
      speed.value += 1
      dom.style.width = speed.value + '%'
      // 递归调用
      timer.value = window.requestAnimationFrame(fn)
    }
    else {
      // 说明进度条已经完成全部进度
      speed.value = 1
      // 清除requestAnimationFrames
      cancelAnimationFrame(timer.value)
    }
  })
}

// 结束时的进度条
const endLoading = () => {
  let dom = bar.value as HTMLElement
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100
      dom.style.width = speed.value + '%'
    })
  }, 500)
}

// 单独测试时候用
// onMounted(() => {
//   // 在onMounted之后才能读到dom
//   startLoading()
//   endLoading()
// })

// 将上面两个方法暴露到外面
defineExpose({
  startLoading,
  endLoading
})

</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  width: 100%;
  height: 8px;

  .bar {
    width: 0;
    height: inherit;
    background-color: skyblue;
  }
}
</style>