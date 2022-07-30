<script setup lang="ts">
  import { storeToRefs } from 'pinia';
import {useTestStore} from './store'

  const Test = useTestStore()

  // 解构store
  // 注意！！ 在pinia中解构是不具有响应式的,
  // 为此我们需要借助pinia的api--> storeToRefs()
  // storeToRefs先将store去外壳toRaw转为对象，之后遍历store的key,对于state的key包上toRef，使得state是有响应的
  //   function storeToRefs(store) {
  //     // See https://github.com/vuejs/pinia/issues/852
  //     // It's easier to just use toRefs() even if it includes more stuff
  //     if (isVue2) {
  //         // @ts-expect-error: toRefs include methods and others
  //         return toRefs(store);
  //     }
  //     else {
  //         store = toRaw(store);
  //         const refs = {};
  //         for (const key in store) {
  //             const value = store[key];
  //             if (isRef(value) || isReactive(value)) {
  //                 // @ts-expect-error: the key is state or getter
  //                 refs[key] =
  //                     // ---
  //                     toRef(store, key);
  //             }
  //         }
  //         return refs;
  //     }
  // }
  const { name, age } = storeToRefs(Test)

  // 进行state的修改
  const change = () => {
    // console.log(name, "@@@", age)
    // Test.age++
    age.value++


  }

</script>

<template>
  <span>这里使用了pinia:</span>
  <div>Initial Value: {{Test.name}}--{{Test.age}}</div>
  <div>new Value: {{name}}--{{age}}</div>
  <button @click="change">change</button>
</template>


<style lang="less" scoped>



</style>
