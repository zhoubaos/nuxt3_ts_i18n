<template>
  <div>
    <h1>登录页面</h1>
    <button @click="login">登录</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
});

const userStore = useUserStore();
const route = useRoute();

const login = () => {
  userStore.setToken('123456789');
  navigateTo(decodeURIComponent((route.query?.redirect as string) ?? '/'));
  console.log('登录');
};
</script>

<style scoped></style>
