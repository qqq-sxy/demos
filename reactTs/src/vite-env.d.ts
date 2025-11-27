/// <reference types="vite/client" />

// 为window对象添加$wujie和$wujieProps属性的类型定义
interface Window {
  // Wujie微前端环境下的生命周期注册函数
  $wujie?: (callback: Function) => void;
  // Wujie传递给子应用的props
  $wujieProps?: Promise<any>;
}
