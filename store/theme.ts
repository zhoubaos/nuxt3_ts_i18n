interface ThemeState {
  theme: 'light' | 'dark';
}

/**
 * @store 系统主题
 */
export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    theme: 'light'
  }),
  actions: {
    // 初始化
    initTheme() {
      this.setHtmlTheme();
    },
    // 切换系统主题
    toggleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light');
    },
    setTheme(theme: 'light' | 'dark') {
      this.theme = theme;

      if (!document.startViewTransition) {
        this.setHtmlTheme();
      } else {
        this.animationToggleTheme();
      }
    },

    // 给html标签设置主题
    setHtmlTheme() {
      if (this.theme === 'light') {
        document.documentElement.removeAttribute('class');
      } else {
        document.documentElement.setAttribute('class', 'dark');
      }
    },

    // 动画切换主题
    animationToggleTheme() {
      // @ts-ignore
      const transition = document.startViewTransition(() => {
        this.setHtmlTheme();
      });

      transition.ready.then(() => {
        console.log(this.theme);

        this.theme === 'light' ? forward() : reverse();
      });

      // 正向
      function forward() {
        const radius = Math.hypot(window.innerWidth, window.innerHeight);
        document.documentElement.animate(
          {
            clipPath: [`circle(0% at ${0}px ${0}px)`, `circle(${radius}px at ${0}px ${0}px)`]
          },
          {
            duration: 400,
            pseudoElement: '::view-transition-new(root)' //设置动画的伪元素
          }
        );
      }

      // 反向
      function reverse() {
        const radius = Math.hypot(window.innerWidth, window.innerHeight);
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0% at ${window.innerWidth}px ${window.innerHeight}px)`,
              `circle(${radius}px at ${window.innerWidth}px ${window.innerHeight}px`
            ]
          },
          {
            duration: 400,
            pseudoElement: '::view-transition-new(root)' //设置动画的伪元素
          }
        );
      }
    }
  },
  // 默认存储到 cookie，详情：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/frameworks/nuxt-3.html
  persist: true
});
