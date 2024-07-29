/**
 * @middleware 路由鉴权中间件
 * eg：https://nuxt.com.cn/docs/guide/directory-structure/middleware
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // 在服务器端跳过中间件
  if (import.meta.server) return;

  // 路由白名单
  const whiteNameList = ['login', 'index'];
  const userStore = useUserStore();
  const { name } = to;

  // 跳转路由是否在白名单内
  const inWhiteNames = (names: string[] = whiteNameList) => names.some((item) => name?.toString().startsWith(item));

  if (userStore.isLogin) {
    if (inWhiteNames(['login'])) {
      return navigateTo({ path: '/' });
    }
    return;
  } else {
    if (inWhiteNames()) return;
    // 未登录，重定向到登录页
    return navigateTo({
      path: '/login',
      query: { redirect: encodeURIComponent(to.fullPath) }
    });
  }
});
