import { router } from "./router/createRouteConfig";
import { useNavigate, useRoutes } from "react-router-dom";
import useLocationChange from "./router/useLocationChange";
import routerListener from "./router/routerListener";
import './style/index.css';
import { useEffect } from "react";

const App = function () {
  const elements = useRoutes(router);
  const navigate = useNavigate();

  useEffect(() => {
    const routeChangeHandler = (path: string) => {
      if (path === undefined) return;
      navigate("/" + path);
    };
    window.$wujie?.bus.$on("routeChange", routeChangeHandler);
    return () => {
      window.$wujie?.bus.$off("routeChange", routeChangeHandler);
    }
  }, [navigate]);

  useLocationChange((to, from) => {
    routerListener(navigate, to, from);
  });
  return elements;
};

export default App;
