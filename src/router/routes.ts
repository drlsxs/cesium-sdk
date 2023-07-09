/*
 * @Author: yangshilin
 * @Date: 2023-07-02 15:54:08
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-09 19:07:44
 * @FilePath: src\router\routes.ts
 * @Description: 请添加文件描述
 */

//常量路由
export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
  },
  {
    path: "/", //登录成功，首页
    component: () => import("@/layout/index.vue"),
    name: "layout",
    children: [
      {
        path: "",
        component: () => import("@/views/home/index.vue"),
        name: "home",
      },
      {
        path: "/example",
        component: () => import("@/views/example/index.vue"),
        name: "example",
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];
