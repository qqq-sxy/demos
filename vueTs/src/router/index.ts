import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import wujieRouter from "./modules/wujieRouter";

export const routes: Array<RouteRecordRaw> = [
  // 首页
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home/index.vue"),
  },
  ...wujieRouter
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});