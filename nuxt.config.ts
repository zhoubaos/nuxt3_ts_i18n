import { resolve } from 'url';

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
    },
    
  },
  runtimeConfig: {
    // 只在服务端使用的键
    apiSecret: '',
    // public中的键也可以在客户端使用
    public: {
      baseUrl: process.env.NUXT_BASE_URL
    }
  },
  css: ['~/assets/styles/less/common.less', '~/assets/styles/css/index.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    '@pinia-plugin-persistedstate/nuxt'
  ],
  components: [
    {
      path: '~/components/layout',
      pathPrefix: false
    },
    {
      path: '~/components',
      pathPrefix: true
    }
  ],

  typescript: {
    shim: false,
    typeCheck: true //启动项目时开始类型检查
  },

  devServer: {
    host: '0.0.0.0',
    port: 8081
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "@/assets/styles/less/vars.less";` //给每个less文件注入全局变量文件
          }
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
});
