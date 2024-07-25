import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {},
  {
    ignores: ['.nuxt/', '.output/', 'node_modules', '.husky']
  }
).override('nuxt/typescript', {
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // 关闭ts未使用变量校验
    '@typescript-eslint/no-explicit-any': 'off' // 关闭ts使用any校验
  }
});
