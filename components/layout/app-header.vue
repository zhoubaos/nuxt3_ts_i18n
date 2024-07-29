<template>
  <div class="flex justify-between px-[300px]">
    <div>我是布局header</div>
    <button
      class="btn text-black text-primary"
      @click="check">
      切换主题
    </button>
  </div>
</template>

<script setup lang="ts">
const themeStore = useThemeStore();
onMounted(() => {
  themeStore.initTheme({
    ex: window.innerWidth,
    ey: window.innerHeight
  });
});

const check = (e: MouseEvent) => {
  const { clientX, clientY } = e;

  themeStore.toggleTheme({
    ex: clientX,
    ey: clientY,
    sx: 0,
    sy: window.innerHeight
  });
};
</script>

<style scoped></style>
