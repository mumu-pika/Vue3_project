<template>
  <div class="login">
    <div>pika列表</div>
    <table cellspacing="0" class="table">
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>more</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in data">
          <th>{{ item.name }}</th>
          <th>{{ item.price }}</th>
          <th>
            <button @click="toDetail(item)">详情</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { data } from "./list.json";
import { useRouter } from "vue-router";

// useRouter()返回router实例
const router = useRouter();

// 这里通过使用插件JSON to TS
//选中json的数据，按下ctrl+shift+alt+s 就能获取到json数据的类型了
type Item = {
  name: string;
  price: string;
  id: number;
};

const toDetail = (item: Item) => {
  // //query传参
  // router.push({
  //   path:'/register',
  //   query: item
  // })

  // // params传参
  // router.push({
  //   name:'Register',
  //   params: item
  // })

  // 动态路由传参
  router.push({
    name: "Register",
    params: {
      id: item.id,
    },
  });
};
</script>
<style>
.login {
  background-color: orange;
  width: 400px;
  height: 400px;
  font-size: 20px;
  color: white;
}
</style>
