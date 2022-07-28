<script setup lang="ts">
  import { ref, nextTick } from 'vue'
  const message = ref<string>('pika')
  const div = ref<HTMLElement>()

  const current = ref<number>(0)


  const change = async () => {
    message.value = 'saber'
    // 这个时候DOM还没有更新
    // 并不会打印出更新后的数据，为此需要借助到nextTick
    // 使得等视图更新完毕后打印出更新后的数据
    await nextTick()
    console.log(div.value?.innerText)
    for (let i = 0; i < 10; i++) {
      current.value = i
    }

    for (var i = 0; i < 5; i++) {
      setTimeout(() => {
        console.log(i) // 输出5个5
      }, 2000)
    }
  }
</script>

<template>
  <div>
    <input v-model="message" type="text">
    <div ref="div">{{message}}</div>
    <button @click="change">change</button>
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
