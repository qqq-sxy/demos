const wujieDemo1 = () => {
  const loginOut = () => {
    window.$wujie.bus.$emit("loginInvalid");
  };

  return (
    <div>
      <h1>我是子应用(react)的wujieDemo1</h1>
      <button onClick={loginOut}>子应用退出登录</button>
    </div>
  );
};

export default wujieDemo1;
