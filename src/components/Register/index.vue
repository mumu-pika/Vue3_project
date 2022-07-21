<template>
  <div>
    <table>
      <tr>
        <td>账号</td>
        <input v-model="form.login" type="text" name="" id="">
      </tr>
      <tr>
        <td>密码</td>
        <input v-model="form.password" type="password" name="" id="">
      </tr>
      <tr>
        <td>验证码</td>
        <input v-model="form.code" type="text" name="" id="">
      </tr>
    </table>
    <button @click="submit">注册</button>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from 'vue'
  const form = reactive({
    login: "",
    password: "",
    code:""
  })

  const submit = () => {
    console.log(form)
  }
</script>

<script lang="ts">
    export default {
    name: 'Register'
  }
</script>

<style lang="less" scoped>

</style>