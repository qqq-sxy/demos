import { ComponentType, lazy } from "react";
import { RouteObject } from "react-router-dom";
import NotFound from "../page/notFound/index";
// 使用交叉类型扩展 RouteObject
export type IRoute = RouteObject & {
    /**
     * 是否是菜单项
     * @default true
     */
    isMenu?: boolean;
    /**
     * 生成菜单的姓名
     */
    name: string;
    component: ComponentType;
    /**
     * 是否触发守卫逻辑
     * @default true
     */
    needGuard?: boolean;
    children?: IRoute[];
};

interface IRouteConfig {
    routes: IRoute[];
}

const routeConfig: IRouteConfig = {
    routes: [
        {
            name: 'home',
            path:  "/",
            component: lazy(() => import("../page/home")),
        },
        {
            name: 'demos',
            path:  "/demos",
            component: lazy(() => import("../page/demos")),
        },
        {
            name: 'other',
            path: "/other",
            component: lazy(() => import("../page/other")),
        },
        {
            name: '404',
            path: "/*",
            component: NotFound,
            isMenu: false
        },
        {
            name: 'wujieDemo1',
            path: "/wujieDemo1",
            component: lazy(() => import("../page/wujiePage/wujieDemo1/index")),
            isMenu: false
        },
        {
            name: 'wujieDemo2',
            path: "/wujieDemo2",
            component: lazy(() => import("../page/wujiePage/wujieDemo2/index")),
            isMenu: false
        }
    ]
}

export default routeConfig;