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
      sm: ['28px', '40px'], // text-sm => fontSize:28px lineHeight:40px
      base: ['14px', '20px'],
      20: '20px' // text-20 => fontSize:20px;
    },

    //
    spacing: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      19: '19px',
      20: '20px'
    },

    extend: {
      // 配置的值会扩展到tailwind.config.js中的默认值
      fontFamily: {}
    }
  },
  plugins: []
};
