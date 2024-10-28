import { ComponentType, lazy } from "react";
import { RouteObject } from "react-router-dom";

/**
 * 自定义的属性千万注意不要和RouteObject中属性重复
 */
export interface IRoute extends RouteObject {
    /**
     * 是否是菜单项
     * @default true
     */
    isMenu?: boolean;
    /**
     * 生成菜单的姓名
     */
    name: string;
    /**
     * 路由路径
     */
    path: string;
    component: ComponentType;
    /**
     * 是否触发守卫逻辑
     * @default true
     */
    needGuard?: boolean;
    children?: IRoute[];
}

interface IRouteConfig {
    routes: IRoute[];
}

const routeConfig: IRouteConfig = {
    routes: [
        {
            name: 'home',
            path: "/",
            component: lazy(() => import('../page/home/index')),
            needGuard: false,
        },
    ]
}
export default routeConfig;