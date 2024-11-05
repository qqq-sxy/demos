import React, { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import routeConfig, { IRoute } from ".";

/**
 * 将简单路由配置转化为 react-router-dom 所需要的配置
 * @param routeList
 * @returns
 */
function createRouteConfig(routeList: IRoute[]): RouteObject[] {
  return routeList.map((item) => {
    const Com = item.component;

    return {
      path: item.path,
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Com />
        </Suspense>
      ),
      /**
       * 支持覆盖原属性
       */
      ...item,
      children: item.children && createRouteConfig(item.children),
    };
  });
}

export const router = createRouteConfig(routeConfig.routes);