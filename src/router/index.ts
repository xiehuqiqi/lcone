import type { App } from 'vue';
import SettingsRouter from './modules/setting';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const publicRoutes: Array<RouteRecordRaw> = [
  ...SettingsRouter,
  {
    path: '/home',
    name: 'homeIndex',
    component: () => import('../views/wo/index.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
});

/* 初始化路由表 */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
  app.use(router);
};