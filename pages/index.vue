<template>
  <div class="text-blue">
    我是首页
    <img
      src="@/assets/images/user.png"
      alt="" />

    <button
      class="btn text-black text-primary"
      @click="check">
      切换主题
    </button>
    <span class="card text-[2rem]">当前主题：{{ themeStore.theme }}</span>
    <div class="text-textColor bg-bgColor dark:text-[30px]">我的水电费是的</div>
  </div>
</template>

<script setup lang="ts">
// import { useThemeStore } from '@/store/theme';
const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});

const check = () => {
  themeStore.toggleTheme();
};
</script>

<style scoped>
.dd {
  /* color: var(--color-primary); */
}
</style>
