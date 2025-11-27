import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./style/index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./model/store";

// Wujie 子应用生命周期：挂载（主应用嵌入时调用）
const mount = (container: HTMLElement | ShadowRoot, props: any) => {
  // 将主应用 props 存入 React 上下文（方便子应用内部使用）
  createRoot(container).render(
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <App {...props} />
        </HashRouter>
      </Provider>
    </StrictMode>
  );
};

// 判断是否在 Wujie 微前端环境中
if (window.$wujie) {
  mount(document.getElementById("root")!, window.$wujie.props);
} else {
  // 独立运行环境（正常启动）
  mount(document.getElementById("root")!, {
    mainAppName: "独立运行",
    token: "local-token",
  });
}
