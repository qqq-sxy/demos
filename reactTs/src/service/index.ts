import http from "../utils/http";

export function getGradeOptions(): Promise<OptionItem[]> {
  return http({
    url: "你的url",
    method: "GET",
    noAlert: true,
    needRes: true,
  });
}

export function getUserInfo(): Promise<any> {
  return new Promise((resolve, reject) => {
    resolve({
      name: "张三",
      age: 18,
    })
  })
}