<template>
  <div v-if="modelValue" class="dialog">
    <div class="dialog-header">
      <div>标题---{{title}}</div>
      <div @click="close">x</div>
    </div>
    <div class="dialog-content">内容</div>
  </div>
</template>

<script setup lang="ts">

// import {reactive} from 'vue'

type Props = {
  modelValue:boolean,
  title: string,
  modelModifiers?: {
    // 这里是在v-model后面添加了.pika这个修饰符，打印出来的结果为true
    pika: boolean
  }
}

const PropsData = defineProps<Props>()

const emit = defineEmits(['update:modelValue', 'update:title'])

const close = () => {
  console.log(PropsData.modelModifiers)

  // 这里根据自定义的修饰符的值，进行
  emit('update:modelValue', false)
  emit('update:title', '我变成了小猫猫')
}

// type names = {
//   name: string,
//   age: number
// }

// // 子组件定义一个响应式数据
// const data = reactive<names[]>([
//   {
//     name: 'pika1',
//     age: 200
//   },
//   {
//     name: 'pika2',
//     age: 201
//   },
//   {
//     name: 'pika3',
//     age: 202
//   }
// ])


</script>

<style lang="less" scoped>
// .header {
//   height: 100px;
//   background-color: red;
//   color: #fff;
// }

// .main {
//   height: 200px;
//   background-color: green;
//   color: #fff;
// }

// .footer {
//   height: 100px;
//   background-color: blue;
//   color: #fff;
// }

.dialog {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &-header {
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  &-content {
    padding: 10px;
  }


}



</style>