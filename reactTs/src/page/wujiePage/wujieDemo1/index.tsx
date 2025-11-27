const wujieDemo1 = () => {

  return (
    <div>
      <h1>我是子应用(react)的wujieDemo1</h1>
      <button onClick={() =>  window.$wujie?.bus.$emit("subAppData", "我是子应用数据")}>向主应用提交数据</button>
    </div>
  );
};

export default wujieDemo1;
