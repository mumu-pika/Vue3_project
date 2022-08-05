<template>
  <div>
    <router-link to="/user1">/user1</router-link>
    <router-link to="/user2">/user2</router-link>
    <hr/>
    <router-view></router-view>
    <router-view name="BBB"></router-view>
    <router-view name="CCC"></router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
</style>