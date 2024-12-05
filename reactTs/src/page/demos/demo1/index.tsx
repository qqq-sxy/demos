// import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { RenderDemo1 } from "./common";
// import { useMyState } from "./hook/useMyState";

let state: any[] = [];
let stateIndex = 0;

function useMyState(initialValue: any) {
  const currentIndex = stateIndex;
  state[currentIndex] = state[currentIndex] || initialValue;

  const setState = (newValue: any) => {
    state[currentIndex] = newValue;
    render();
  };

  stateIndex++;
  return [state[currentIndex], setState];
}

// 因为状态更改要刷新视图，因此这里用ReactDOM.createRoot方法来模拟更改状态后刷新视图的操作
const render = () => {
  // 每次调用render都要重置stateIndex，否则对应的索引无限递增将无法正确匹配state和setState之间的关系
  stateIndex = 0;
  // 模拟ReactDOM.createRoot方法
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(<Demo1/> );
}

const Demo1 = () => {

  const [ showRenderDemo1, setShowRenderDemo1 ] = useMyState(false);
  console.log("🚀 ~ Demo1 ~ setShowRenderDemo1:", setShowRenderDemo1)
  const [ showRenderDemo2, setShowRenderDemo2 ] = useMyState(false);

  return (
    <div>
      <button onClick={() => setShowRenderDemo1(!showRenderDemo1)}>Toggle RenderDemo1</button>
      {
        RenderDemo1('N', showRenderDemo1)
      }
       <button onClick={() => setShowRenderDemo2(!showRenderDemo2)}>Toggle RenderDemo1</button>
      {
        RenderDemo1('M', showRenderDemo2)
      }
    </div>
  );
};

export default Demo1;
