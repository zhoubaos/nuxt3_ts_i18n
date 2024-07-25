<template>
  <div class="text-blue text-">
    我是首页
    <img
      src="@/assets/images/user.png"
      alt="" />
    <button
      class="btn"
      @click="check">
      切换布局
    </button>
  </div>
</template>

<script setup lang="ts">
const check = () => {
  setPageLayout('mobile-default');
};
</script>

<style scoped></style>
