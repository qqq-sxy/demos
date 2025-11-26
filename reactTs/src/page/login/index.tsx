import React, { useState } from "react";
const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const login = () => {
    if (!form.username || !form.password) {
      alert("请输入账号密码");
      return;
    } else {
      localStorage.setItem("token", "123456");
    }
  };

  return (
    <div className="login">
      <h1>登录页</h1>
      <div>
        <input
          type="text"
          placeholder="请输入账号"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="请输入密码"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={login}>登录</button>
    </div>
  );
};

export default Login;
