/*
 * @Author: yangshilin
 * @Date: 2023-06-29 21:36:58
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-09 20:24:12
 * @FilePath: src\main.ts
 * @Description: 请添加文件描述
 */
import { createApp } from "vue";
import App from "./App.vue";
//引入element-plus插件与样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//引入element-plus国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
//引入svg插件配置
import "virtual:svg-icons-register";
//引入全局组件
import globalComponent from "@/components";
//引入全局样式
import "@/styles/index.scss";
//引入路由
import router from "@/router";
//引入仓库
import pinia from "@/store";
//获取应用实例对象
const app = createApp(App);
//注册为全局组件
app.use(globalComponent);
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
});
//注册模板路由
app.use(router);
//安装pinia
app.use(pinia);
//将应用挂载到挂载点上
app.mount("#app");
