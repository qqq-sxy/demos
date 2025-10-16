import ReactDOMClient from "react-dom/client";
import { RenderDemo1 } from "./common";

/*****自定义useState的部分*********************************************************************/
const state: any[] = []; // 保存所有的state
const setState: any[] = []; // 保存所有的setState
let stateIndex = 0; // 当前state的索引

const createSetState = (index: number) => {
  // 通过索引获取对应的setState
  return (newValue: any) => {
    // 闭包
    state[index] = newValue;
    render(); // 重新渲染视图
  };
};

let root: ReactDOMClient.Root;

const render = () => {
  // 模拟刷新视图
  // 每次调用render都要重置stateIndex，否则对应的索引无限递增将无法正确匹配state和setState之间的关系
  stateIndex = 0;
  // 模拟ReactDOM.createRoot方法
  const rootElement = document.getElementById("root");
  // 只创建一次根节点
  if (!root) {
    root = ReactDOMClient.createRoot(rootElement);
  }
  root.render(<Demo1 />); // 自己渲染的视图组件
};

function useMyState(initialValue: any) {
  // 自定义useState
  const currentIndex = stateIndex;
  state[currentIndex] = state[currentIndex] || initialValue; // 初始化state 为 initialValue
  setState[currentIndex] =
    setState[currentIndex] || createSetState(currentIndex); // 初始化setState

  stateIndex++;
  return [state[currentIndex], setState[currentIndex]];
}

/*****自定义useState的部分*********************************************************************/

const Demo1 = () => {
  const [showRenderDemo1, setShowRenderDemo1] = useMyState("我是1");
  console.log("🚀 ~ Demo1 ~ setShowRenderDemo1:", setShowRenderDemo1);
  const [showRenderDemo2, setShowRenderDemo2] = useMyState("我是2");

  return (
    <div>
      <button onClick={() => setShowRenderDemo1(!showRenderDemo1)}>
        Toggle RenderDemo1
      </button>
      {RenderDemo1("N", showRenderDemo1)}
      <button onClick={() => setShowRenderDemo2(!showRenderDemo2)}>
        Toggle RenderDemo1
      </button>
      {RenderDemo1("M", showRenderDemo2)}
    </div>
  );
};

export default Demo1;
