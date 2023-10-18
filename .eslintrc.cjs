/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:security/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 'error',
    'no-eval': 'error',
    'no-loop-func': 'error',
    'no-new-object': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
  },
  overrides: [
    {
      files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
      extends: ['plugin:testing-library/vue'],
      rules: {
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off',
      },
    },
    {
      files: ['**/__tests__/e2e/**/*.spec.[jt]s?(x)'],
      extends: ['plugin:playwright/recommended'],
    },
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
