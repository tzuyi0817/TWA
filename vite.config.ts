import { fileURLToPath, URL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import legacy from '@vitejs/plugin-legacy';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { version as pkgVersion } from './package.json';

process.env.VITE_APP_VERSION = pkgVersion;
process.env.NODE_ENV = process.env.MOCK ? 'mockServiceWorker' : process.env.NODE_ENV;
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = Date.now().toString();
}

export default defineConfig({
  base: '/TWA/',
  plugins: [
    vue(),
    Components({
      dirs: ['src/components/common'],
      dts: 'src/components.d.ts',
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), 'src/locales/**'),
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/images/svgIcons')],
    }),
    legacy({
      targets: ['defaults', 'safari 12', 'chrome 49'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'es.global-this',
        'esnext.string.match-all',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
}) as UserConfig;
