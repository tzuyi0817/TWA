import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/pages/IndexPage.vue';
import Twa from '@/pages/TwaPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Vue3 Coding Standards',
    },
  },
  {
    path: '/twa',
    component: Twa,
    meta: {
      title: 'TWA',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
