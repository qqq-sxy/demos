import useLocationChange from "@hooks/useLocationChange";
import routerListener from "@router/routerListener";
import { router } from "@router/util";
import { useNavigate, useRoutes } from "react-router-dom";

const App = function () {
  const elements = useRoutes(router);
  const navigate = useNavigate();
  useLocationChange((to, from) => {
    routerListener(navigate, to, from);
  });

  return elements;
};

export default App;
