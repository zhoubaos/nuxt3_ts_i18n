// 动画的起止坐标
interface StartAndEndCoordinate {
  sx: number; // 动画的起点x坐标
  sy: number; // 动画的起点y坐标
  ex: number; // 动画的终点x坐标
  ey: number; // 动画的终点y坐标
}

interface ThemeState {
  theme: 'light' | 'dark';
  coor: StartAndEndCoordinate;
}

/**
 * @store 系统主题
 */
export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    theme: 'light',
    coor: {
      sx: 0,
      sy: 0,
      ex: 0,
      ey: 0
    }
  }),
  getters: {
    radius: (state) => {
      const { sx, sy, ex, ey } = state.coor;
      return Math.hypot(ex - sx, ey - sy);
    }
  },
  actions: {
    // 初始化
    initTheme(coor: Partial<StartAndEndCoordinate> = {}) {
      Object.assign(this.coor, coor);
      this.setHtmlTheme();
    },
    /**
     * @desc 切换当前主题
     * @default 默认值
     * {
     *  sx: 0,
     *  sy: 0,
     *  ex: window.innerWidth,
     *  ey: window.innerHeight
     * }
     */
    toggleTheme(coor: Partial<StartAndEndCoordinate> = {}) {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      Object.assign(this.coor, coor);
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
      const { sx, sy, ex, ey } = this.coor;

      // @ts-ignore
      const transition = document.startViewTransition(() => {
        this.setHtmlTheme();
      });

      transition.ready.then(() => {
        this.theme === 'light' ? forward() : reverse();
      });

      // 正向
      const forward = () => {
        document.documentElement.animate(
          {
            clipPath: [`circle(0% at ${sx}px ${sy}px)`, `circle(${this.radius}px at ${sx}px ${sy}px)`]
          },
          {
            duration: 400,
            pseudoElement: '::view-transition-new(root)' //设置动画的伪元素
          }
        );
      };

      // 反向
      const reverse = () => {
        document.documentElement.animate(
          {
            clipPath: [`circle(0% at ${ex}px ${ey}px)`, `circle(${this.radius}px at ${ex}px ${ey}px`]
          },
          {
            duration: 400,
            pseudoElement: '::view-transition-new(root)' //设置动画的伪元素
          }
        );
      };
    }
  },
  // 默认存储到 cookie，详情：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/frameworks/nuxt-3.html
  persist: true
});
