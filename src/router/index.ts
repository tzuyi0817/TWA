import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/pages/IndexPage.vue';
import Telegram from '@/pages/TelegramPage.vue';

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
    path: '/telegram',
    component: Telegram,
    meta: {
      title: 'Telegram',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
