import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layout/index.vue';

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/document',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Document',
        component: () => import('@/views/document/index.vue'),
        meta: { title: '文档' },
      },
    ],
  },
];
export const asyncRoutes = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
