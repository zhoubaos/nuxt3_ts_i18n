<template>
  <div>
    我是首页

    <button @click="check">切换布局</button>
  </div>
</template>

<script setup lang="ts">
const check = () => {
  setPageLayout('mobile-default');
};
</script>

<style scoped></style>
