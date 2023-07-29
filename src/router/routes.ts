/*
 * @Author: yangshilin
 * @Date: 2023-07-02 15:54:08
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-29 18:24:17
 * @FilePath: src\router\routes.ts
 * @Description: 请添加文件描述
 */

//常量路由
export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    name: "login", //命名路由
  },
  {
    path: "/", //登录成功，首页
    component: () => import("@/layout/layout.vue"),
    name: "layout",
    children: [
      {
        path: "",
        component: () => import("@/views/home/home.vue"),
        name: "home",
      },
      {
        path: "/example",
        component: () => import("@/views/example/example.vue"),
        name: "example",
      },
      {
        path: "/editView",
        component: () => import("@/views/editView/editView.vue"),
        name: "editView",
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/404.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];
