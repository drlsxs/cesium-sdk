/*
 * @Author: yangshilin
 * @Date: 2023-07-02 15:44:52
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 15:55:12
 * @FilePath: src\router\index.ts
 * @Description: 请添加文件描述
 */
//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "@/router/routes";

//创建路由器
const router = createRouter({
  //路由器模式
  history: createWebHashHistory(),
  routes: constantRoute,
});
export default router;
