/// 状态值
const myState = [];
// 更新状态的函数
const mySetter = [];
// 状态值的索引
let curIndex = 0;
// 是否是初次渲染
let isInit = true;

// 维护更新状态函数的数组
const createMySetter = (curIndex: number) => {
  return (value: any) => {
    myState[curIndex] = value;
  };
}

// 暴露出来自定义的useState
export const useMyState = (initValue: any) => {
  // 如果是初次渲染
  if(isInit) {
    myState[curIndex] = initValue;
    mySetter[curIndex] = createMySetter(curIndex);
    isInit = false;
  }
  curIndex++;
  return [myState[curIndex], mySetter[curIndex]];
}