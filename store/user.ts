/**
 * @store 用户信息
 */
export const useUserStore = defineStore('user', {
  state: () => ({
    name: '张三',
    token: ''
  }),
  getters: {
    isLogin: (state) => !!state.token
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    }
  },
  persist: true
});
