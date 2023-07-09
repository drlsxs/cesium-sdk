/*
 * @Author: yangshilin
 * @Date: 2023-07-02 15:14:55
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 15:37:23
 * @FilePath: src\api\user\index.ts
 * @Description: 请添加文件描述
 */
// 统一管理项目用户的接口
import request from "@/utils/request";
import type {
  loginForm,
  loginResponseData,
  userResponseData,
} from "@/api/user/type";
//统一管理接口
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

//暴露请求函数

//登录接口
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
//获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL);
