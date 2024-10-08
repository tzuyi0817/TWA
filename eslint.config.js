import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.basic,
  ...componentHookPlugin.configs.vue,
  ...componentHookPlugin.configs.markdown,
  componentHookPlugin.configs.sonarjs,
  componentHookPlugin.configs.security,
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    ...componentHookPlugin.configs['testing-library/vue'],
  },
];
