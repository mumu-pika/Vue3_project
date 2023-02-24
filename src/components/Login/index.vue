<template>
  <div>
    <table>
      <tr>
        <td>账号</td>
        <input v-model="form.login" type="text" name="" id="" />
      </tr>
      <tr>
        <td>密码</td>
        <input v-model="form.password" type="password" name="" id="" />
      </tr>
      <tr>
        <td>验证码</td>
        <input v-model="form.code" type="text" name="" id="" />
      </tr>
    </table>
    <button @click="submit">登录</button>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  onActivated,
  onDeactivated,
  onMounted,
  onUnmounted,
} from 'vue'
const form = reactive({
  login: '',
  password: '',
  code: '',
})

const submit = () => {
  console.log(form)
}

// 考虑keep-alive下组件生命周期
onMounted(() => {
  console.log('login onMounted')
})

onActivated(() => {
  console.log('login onActivated')
})

onDeactivated(() => {
  console.log('login onDeactivated')
})

onUnmounted(() => {
  console.log('login onUnmounted')
})
</script>

<script lang="ts">
export default {
  name: 'Login',
}
</script>

<style lang="less" scoped></style>
