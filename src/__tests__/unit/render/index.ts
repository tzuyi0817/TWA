import type { Component } from 'vue';
import { render } from '@testing-library/vue';
import type { RenderOptions } from '@testing-library/vue/types';
import { setActivePinia, createPinia } from 'pinia';
import i18n from '@/plugins/i18n';

interface RenderComponentOptions extends RenderOptions {
  provide?: Record<any, any>;
}

const pinia = createPinia();

setActivePinia(pinia);

export function renderComponent(testComponent: Component, options?: RenderComponentOptions) {
  const { provide, ...componentOptions } = options ?? {};

  return render(testComponent, {
    ...componentOptions,
    global: {
      plugins: [pinia, i18n],
      provide,
    },
  });
}
