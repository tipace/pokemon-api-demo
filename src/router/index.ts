import {
  createRouter,
  createWebHistory,
  type Router,
  type RouteRecordRaw,
} from 'vue-router';

/** Router Rules */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/list/index.vue'),
  },
];

/** Vue Router */
const router: Router = createRouter({
  /**
   * History Mode
   *
   * @see {@link https://router.vuejs.org/guide/essentials/history-mode.html }
   */
  history: createWebHistory(),
  routes,
});

export default router;
