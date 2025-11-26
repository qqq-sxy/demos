import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import wujieRouter from "./modules/wujieRouter";

export const routes: Array<RouteRecordRaw> = [
  // 首页
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home/index.vue"),
  },
  // 菜单页
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../pages/menu/index.vue"),
  },
  ...wujieRouter
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});