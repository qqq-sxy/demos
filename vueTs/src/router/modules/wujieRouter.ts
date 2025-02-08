const routerName = "wujieRoute";

const wujieRouters = [
  {
    path: `/${routerName}`,
    name: `${routerName}`,
    component: () => import("@/pages/wujie/father.vue"),
    meta: {
      subAppPath: "wujieDemo1",
    },
    children: [
      {
        path: `/${routerName}/wujieDemo1`,
        name: `${routerName}_wujieDemo1`,
        component: () => import("@/pages/wujie/index.vue"),
        meta: {
          subAppPath: "wujieDemo1",
        }
      },
      {
        path: `/${routerName}/wujieDemo2`,
        name: `${routerName}_wujieDemo2`,
        component: () => import("@/pages/wujie/index.vue"),
        meta: {
          subAppPath: "wujieDemo2",
        }
      }
    ]
  },
  
]

export default wujieRouters;