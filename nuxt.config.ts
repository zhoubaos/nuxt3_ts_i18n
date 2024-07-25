// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // 给每个页面添加一个head配置
    head: {
      title: 'nuxt3+ts+i18n',
      meta: [
        {
          name: 'description',
          content: '基于nuxt3+ts+i18n搭建的开发模版'
        }
      ]
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
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  typescript: {
    shim: false,
    typeCheck: true //启动项目时开始类型检查
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
