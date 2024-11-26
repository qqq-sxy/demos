import http from "../utils/http";

export function getGradeOptions(): Promise<OptionItem[]> {
  return http({
    url: "你的url",
    method: "GET",
    noAlert: true,
    needRes: true,
  });
}