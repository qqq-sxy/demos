import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./style/index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./model/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>,
);

// Wujie 子应用生命周期：挂载（主应用嵌入时调用）
const mount = (container: HTMLElement | ShadowRoot, props: any) => {
  console.log('React 子应用接收主应用 props：', props);
  // 将主应用 props 存入 React 上下文（方便子应用内部使用）
  createRoot(container).render(
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <App {...props} />
        </HashRouter>
      </Provider>
    </StrictMode>,
  );
};


// Wujie 子应用生命周期：卸载（主应用销毁时调用）
const unmount = () => {
  const root = createRoot(document.getElementById('root')!);
  root.unmount();
  console.log('React 子应用卸载成功');
};

// 判断是否在 Wujie 微前端环境中
if (window.__WUJIE_MOUNT) {
  // 微前端环境：暴露 mount/unmount 方法给 Wujie 调用
  window.__WUJIE_MOUNT(mount);
  window.__WUJIE_UNMOUNT(unmount);
  // 可选：接收主应用传递的 props（Wujie 会注入）
  window.__WUJIE_PROPS?.then((props: any) => {
    mount(document.getElementById('root')!, props);
  });
} else {
  // 独立运行环境（正常启动）
  mount(document.getElementById('root')!, {
    mainAppName: '独立运行',
    token: 'local-token',
  });
}
