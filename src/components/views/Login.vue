<template>
  <div>
    <h1>Login</h1>
    <el-card class="box-card">
      <el-form
        ref="form"
        :rules="rules"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-form-item prop="user" label="账号">
          <el-input v-model="formInline.user" placeholder="请输入账号~" />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="formInline.password" placeholder="请输入密码~" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormItemRule, FormInstance } from 'element-plus'

import { ElMessage } from 'element-plus'

import axios from 'axios'

const router = useRouter()

type From = {
  user: string
  password: string
}

type Rules = {
  // key是动态的
  [K in keyof From]?: Array<FormItemRule>
}

const form = ref<FormInstance>()

// 表单数据
const formInline = reactive<From>({
  user: '',
  password: '',
})

const rules = reactive<Rules>({
  user: [
    {
      required: true,
      message: '请输入账号',
      type: 'string',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      type: 'string',
    },
  ],
})

const onSubmit = () => {
  console.log('submit!', form.value)
  form.value?.validate((validate) => {
    // validate是一个boolean值，会判断验证是否通过
    if (validate) {
      initRouter()
      // 验证通过，跳转
      // router.push('/Index')
      // 存储token
      // localStorage.setItem('pikaToken','hhh')
    } else {
      // 验证失败，提示信息
      ElMessage.error('请输入完整信息')
    }
  })
}

// 实现动态路由, 去请求后端接口
const initRouter = async () => {
  const result = await axios.get('http://localhost:4321/login', {
    params: formInline,
  })
  result.data.route.forEach((v: any) => {
    router.addRoute({
      path: v.path,
      // name: v.name,

      component: () =>
        defineAsyncComponent(
          () => import(/* @vite-ignore */ `../${v.component}`)
        ),
    })
  })

  router.push('/index')
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
