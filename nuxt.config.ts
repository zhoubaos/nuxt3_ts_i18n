// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'nuxt3+ts+i18n'
    }
  },
  runtimeConfig: {
    // 只在服务端使用的键
    apiSecret: '',
    // public中的键也可以在客户端使用
    public: {
      baseUrl: process.env.NUXT_BASE_URL
    }
  },
  css: ['~/assets/styles/common.less'],
  modules: ['@nuxt/eslint'],
  typescript: {
    shim: false,
    typeCheck: true //构建时启用类型检查
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "@/assets/styles/vars.less";`
          }
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
});
