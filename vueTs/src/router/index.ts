import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  // 首页
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home/index.vue"),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});