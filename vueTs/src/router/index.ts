import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import wujieRouter from "./modules/wujieRouter";

export const routes: Array<RouteRecordRaw> = [
  // 首页
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home/index.vue"),
    meta: {
      title: '首页',
      icon: 'HomeFilled',
      hidden: false
    }
  },
  ...wujieRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

// 路由守卫：修改页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next();
});

export default router;

