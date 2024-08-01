<template>
  <div class="text-blue">
    我是首页
    <img
      src="@/assets/images/user.png"
      alt="" />

    <div class="card text-[2rem]">
      <span>当前主题：{{ themeStore.theme }}</span>
    </div>
    <div class="w-2 p-sm text-textColor rounded-[20px] my-20 bg-bgColor dark:text-[30px]">我的水电费是的</div>
    <div @click="navigateTo('/list')">去list页</div>
    <div class="columns-3">
      <h1 class="bg-[red]">第一列</h1>
      <h1 class="bg-[red]">第二列</h1>
      <h1>第三列</h1>
    </div>
    <div class="container">dsfs 122</div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: { name: 'page', mode: 'out-in' }
  // middleware: 'auth'
  // validate: async (route: any) => {
  //   // 检查id是否由数字组成
  //   return /^\d+$/.test(route.query?.id);
  // }
});
const themeStore = useThemeStore();

onBeforeMount(() => {
  console.log(999999999);
});
</script>

<style scoped>
.dd {
  /* color: var(--color-primary); */
}
</style>
