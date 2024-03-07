import router from "@/router/index";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { useUserStoreHook } from "@/store/modules/user";

NProgress.configure({ showSpinner: false }); // 进度条
// 白名单路由
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const hasToken = localStorage.getItem("accessToken");
  // 如果hasToken存在，即代表已经登陆过了
  if (hasToken) {
    if (to.path === "/login") {
      // 如果已登录，跳转首页
      next("/");
      NProgress.done();
    } else {
      // 1，先判断用户信息是否存在，如果存在去匹配路由地址，如果匹配不上，就跳到404,看to的已存在的路由是否有已有的地址
      // 2，如果用户信息不存在，那么就通过接口去获取，获取到信息之后
      const userStore = useUserStoreHook();
      const hasRoles = userStore.user.roles && userStore.user.roles.length > 0;
      if (hasRoles) {
        // 去看路由是否有，存在就直接跳转，如果没有匹配到任何路由，就跳转到404
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next("/404");
        } else {
          next();
        }
      } else {
        try {
          const { roles } = await userStore.getUserInfo();
          console.log("roles", roles);
          next();
        } catch (error) {
          // 移除token并且跳转到登陆页
          await userStore.resetToken();
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    // 未登陆则跳转到登陆页面,白名单路由可以直接访问
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
