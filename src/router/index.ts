import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import IndexPage from '@/pages/IndexPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vue3 Coding Standards',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
