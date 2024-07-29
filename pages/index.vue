<template>
  <div class="text-blue">
    我是首页
    <img
      src="@/assets/images/user.png"
      alt="" />

    <span class="card text-[2rem]">当前主题：{{ themeStore.theme }}</span>
    <div class="text-textColor bg-bgColor dark:text-[30px]">我的水电费是的</div>
    <div @click="navigateTo('/list')">去list页</div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // middleware: 'auth'
  // validate: async (route: any) => {
  //   // 检查id是否由数字组成
  //   return /^\d+$/.test(route.query?.id);
  // }
});
const themeStore = useThemeStore();
</script>

<style scoped>
.dd {
  /* color: var(--color-primary); */
}
</style>
