import React, { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import ErrorElement from "@component/ErrorElement";
import GuardCom from "@component/Guard";
import routeConfig, { IRoute } from ".";

/**
 * 将简单路由配置转化为react-router所需要的配置
 * @param routeList
 * @returns
 */
function createRouteConfig(routeList: IRoute[]): RouteObject[] {
  return routeList.map((item) => {
    const Com = item.component;
    item.needGuard = item.needGuard === undefined || item.needGuard === true;

    return {
      path: item.path,
      element: item.needGuard ? (
        <GuardCom>
          <Suspense fallback={<p></p>}>
            <Com />
          </Suspense>
        </GuardCom>
      ) : (
        <Suspense fallback={<p></p>}>
          <Com />
        </Suspense>
      ),
      errorElement: <ErrorElement />,
      /**
       * 支持覆盖原属性
       */
      ...item,
      children: item.children && createRouteConfig(item.children),
    };
  });
}

export const router = createRouteConfig(routeConfig.routes);
