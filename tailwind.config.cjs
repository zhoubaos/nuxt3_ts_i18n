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
    // 重置屏幕变体
    screens: {
      sm: {
        max: '750px' // @media screen and (max-width: 750px) { ... }
      }
    },
    // 重置颜色
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      //主题颜色
      primary: {
        DEFAULT: 'var(--color-primary)'
      },
      bgColor: 'var(--bg-color)', // 默认背景颜色
      textColor: 'var(--text-color)' // 默认字体颜色
    },
    // 重置字体大小
    fontSize: {
      sm: ['28px', '40px'], // text-sm => fontSize:28px lineHeight:40px
      base: ['14px', '20px'],
      12: ['12px', '15px'],
      16: ['16px', '20px'],
      18: '18px',
      20: '20px' // text-20 => fontSize:20px;
    },
    // 重置间距，适配间距属性：
    spacing: {
      sm: '4px', // m-sm => margin:4px;
      base: '8px', // m-base => margin:8px;
      1: '1px', // m-1 => margin:1px;
      2: '2px', // p-2 => padding:2px;
      4: '4px', // w-4 => width:4px;
      6: '6px', // h-6 => height:6px;
      8: '8px', // gap-8 => gap:8px;
      10: '10px', // inset-10 => inset:10px;
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px'
    },

    // 重置圆角
    borderRadius: {
      none: '0',
      sm: '4px', // rounded-sm => borderRadius:4px;
      DEFAULT: '8px', // rounded => borderRadius:8px;
      6: '6px', // rounded-6 => borderRadius:6px;
      10: '10px',
      12: '12px',
      14: '14px'
    },

    extend: {
      // 配置的值会扩展到tailwind.config.js中的默认值
      fontFamily: {}
    }
  },
  plugins: []
};
