// src/store/modules/user.ts
import { defineStore } from "pinia";
import { loginApi } from "@/api/auth";
import { LoginData } from "@/api/auth/types";
import { useStorage } from "@vueuse/core";
import { store } from "@/store";

export const useUserStore = defineStore("user", () => {
  const token = useStorage("accessToken", "");
  /**
   * 登录调用
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then((response) => {
          const { tokenType, accessToken } = response.data;
          token.value = tokenType + " " + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  return {
    token,
    login,
  };
});
// 非setup 导出一个自定义钩子函数
export function useUserStoreHook() {
  return useUserStore(store);
}
