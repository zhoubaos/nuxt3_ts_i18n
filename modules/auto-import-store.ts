import { defineNuxtModule, addImportsDir, createResolver } from 'nuxt/kit';
/**
 * @module 自动导入store中的模块
 */
export default defineNuxtModule({
  meta: {
    name: 'auto-import-store'
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addImportsDir(resolver.resolve('../store'));
  }
});
