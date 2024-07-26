/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector', //手动切换主题
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './plugins/**/*.{js,ts}',
    './pages/**/*.vue',
    './app.vue'
  ],
  // 直接配置theme下的主题、颜色等会直接覆盖tailwind.config.js中的默认值，如果在extend中配置则是扩展默认值
  theme: {
    screens: {
      sm: {
        max: '750px' // 屏幕宽度小于 750px 时 sm:xxx 生效
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      //主题颜色
      primary: {
        DEFAULT: 'var(--color-primary)'
      },
      bgColor: 'var(--bg-color)',
      textColor: 'var(--text-color)'
    },
    //
    fontSize: {
      sm: ['28px', '40px'],
      base: ['14px', '20px'], // fontSize:14px lineHeight:20px
      20: '20px'
    },

    extend: {
      // 配置的值会扩展到tailwind.config.js中的默认值
      fontFamily: {}
    }
  },
  plugins: []
};
