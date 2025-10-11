import { MockMethod } from "vite-plugin-mock";

const apiMock: MockMethod[] = [
    {
      url: "/mock/userInfo",
      method: "get",
      response: () => {
        return {
          code: 0,
          data: {
            name: "寻找光_sxy",
            age: 18
          },
          "msg": "success"
        }
      },
    },
  ];
  
  export default apiMock;