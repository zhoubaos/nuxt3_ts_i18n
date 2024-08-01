<template>
  <div>
    <nuxt-layout name="mobile-default">
      <list-com></list-com>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: { name: 'page', mode: 'out-in' }
});

useHead({
  title: 'dd',
  meta: [
    { name: 'description', content: '我是list页面' },
    { name: 'keywords', content: 'nuxt3 ts i18n' }
  ]
});

const user = useCookie('user');
</script>

<style scoped></style>
