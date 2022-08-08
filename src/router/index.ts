import { createRouter, createWebHashHistory } from "vue-router";
const routes: any[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
