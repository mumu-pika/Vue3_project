<script setup lang="ts">
  import { ref } from 'vue'
  const message = ref<string>('pika')
  const div = ref<HTMLElement>()

  const change = () => {
    message.value = 'saber'
    console.log(div.value?.innerText)
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
