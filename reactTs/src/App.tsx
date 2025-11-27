import { router } from "./router/createRouteConfig";
import { useNavigate, useRoutes } from "react-router-dom";
import useLocationChange from "./router/useLocationChange";
import routerListener from "./router/routerListener";
import "./style/index.css";
import { useEffect } from "react";

const App = function (props: any) {
  const elements = useRoutes(router);
  const navigate = useNavigate();

  useEffect(() => {
    const wujieBus = window.$wujie?.bus;
    const routeChangeHandler = (path: string) => {
      console.log("path", path);
      if (path === undefined) return;
      navigate("/" + path);
    };
    wujieBus.$emit('routeChange', {
      type: 'reply',
      content: '子应用已收到消息',
    });
    wujieBus.$on("routeChange", routeChangeHandler);
    return () => {
      wujieBus.$off("routeChange", routeChangeHandler);
    };
  }, []);

  useLocationChange((to, from) => {
    routerListener(navigate, to, from);
  });
  return elements;
};

export default App;
