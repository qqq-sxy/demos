const routerName = "wujieRoute";

const wujieRouters = [
  {
    path: `/${routerName}`,
    name: `${routerName}`,
    component: () => import("@/pages/wujie/index.vue"),
    meta: {
      subAppPath: "wujieDemo1",
    },
  },

]

export default wujieRouters;