const routerName = "wujiePage";

const wujieRouters = [
  {
    path: `/${routerName}`,
    name: `${routerName}`,
    component: () => import("@/pages/wujie/index.vue"),
    meta: {
      title: '新项目-react', // 菜单显示文本
      icon: 'CreditCard', // 菜单图标
      hidden: false,
      level: 0,
    },
    children: [
      {
        path: "wujieDemo1", // 子路由直接使用相对路径，不要包含父路由名称
        name: `${routerName}wujieDemo1`, // 名称保持唯一，不要使用斜杠
        component: () => import("@/pages/wujie/wujie.vue"),
        meta: {
          title: 'wujieDemo1', // 菜单显示文本
          icon: 'Present', // 子菜单图标
          hidden: false,
          level: 1,
          subAppPath: "/wujieDemo1",
        },
      },
      {
        path: "wujieDemo2", // 子路由直接使用相对路径，不要包含父路由名称
        name: `${routerName}wujieDemo2`, // 名称保持唯一，不要使用斜杠
        component: () => import("@/pages/wujie/wujie.vue"),
        meta: {
          title: 'wujieDemo2', // 菜单显示文本
          icon: 'Present', // 子菜单图标
          hidden: false,
          level: 1,
          subAppPath: "/wujieDemo2",
        },
      },
    ]
  },

]

export default wujieRouters;