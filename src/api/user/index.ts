// src/api/auth/index.ts
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { UserInfo } from "./types";

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function getUserInfoApi(): AxiosPromise<UserInfo> {
  return request({
    url: "/api/v1/users/me",
    method: "get",
  });
}
