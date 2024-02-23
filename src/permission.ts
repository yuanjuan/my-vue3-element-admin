import router from "@/router/index";
// 白名单路由
const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  const hasToken = localStorage.getItem("accessToken");
  // 如果hasToken存在，即代表已经登陆过了
  if (hasToken) {
    if (to.path === "/login") {
      // 如果已登录，跳转首页
      next("/");
    } else {
      next();
    }
  } else {
    // 未登陆则跳转到登陆页面,白名单路由可以直接访问
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
