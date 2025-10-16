// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Demo1 from '../index'; // Ensure that Demo1 is a valid React component

// let state: any[] = [];
// let stateIndex = 0;

// function useMyState(initialValue: any) {
//   const currentIndex = stateIndex;
//   state[currentIndex] = state[currentIndex] || initialValue;

//   const setState = (newValue: any) => {
//     state[currentIndex] = newValue;
//     render();
//   };

//   stateIndex++;
//   return [state[currentIndex], setState];
// }

// // 因为状态更改要刷新视图，因此这里用ReactDOM.createRoot方法来模拟更改状态后刷新视图的操作
// const render = () => {
//   // 每次调用render都要重置stateIndex，否则对应的索引无限递增将无法正确匹配state和setState之间的关系
//   stateIndex = 0;
//   // 模拟ReactDOM.createRoot方法
//   const root = ReactDOM.createRoot(document.getElementById('root')!);
//   root.render(Demo1 );
// }

// export { useMyState, render };
