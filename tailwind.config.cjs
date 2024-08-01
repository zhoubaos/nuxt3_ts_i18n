/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './plugins/**/*.{js,ts}',
    './pages/**/*.vue',
    './app.vue'
  ],
  // 自定义预设值
  presets: [require('./config/tailwind.cjs')],
  theme: {
    // 扩展预设默认值
    extend: {}
  }
};
