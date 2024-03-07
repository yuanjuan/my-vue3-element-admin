// src/store/modules/user.ts
import { defineStore } from "pinia";
import { loginApi } from "@/api/auth";
import { LoginData } from "@/api/auth/types";
import { useStorage } from "@vueuse/core";
import { store } from "@/store";
import { getUserInfoApi } from "@/api/user/index";
import { UserInfo } from "@/api/user/types";
import { resetRouter } from "@/router";

export const useUserStore = defineStore("user", () => {
  const user: UserInfo = {
    roles: [],
  };
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
  // 获取信息(用户昵称、头像、角色集合、权限集合)
  function getUserInfo() {
    return new Promise<UserInfo>((resolve, reject) => {
      getUserInfoApi()
        .then(({ data }) => {
          if (!data) {
            reject("Verification failed, please Login again.");
            return;
          }
          if (!data.roles || data.roles.length <= 0) {
            reject("getUserInfo: roles must be a non-null array!");
            return;
          }
          Object.assign(user, { ...data });
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  // 移除token
  function resetToken() {
    return new Promise<void>((resolve) => {
      token.value = "";
      resetRouter();
      resolve();
    });
  }
  return {
    token,
    user,
    login,
    getUserInfo,
    resetToken,
  };
});
// 非setup 导出一个自定义钩子函数
export function useUserStoreHook() {
  return useUserStore(store);
}
