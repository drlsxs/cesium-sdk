/*
 * @Author: yangshilin
 * @Date: 2023-07-02 15:19:48
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 19:47:52
 * @FilePath: src\api\user\type.ts
 * @Description: 请添加文件描述
 */

//等罗接口需要携带参数ts类型

export interface loginForm {
  username: string;
  password: string;
}

export interface dataType {
  token?: string;
  message?: string;
}

//登陆接口返回数据类型
export interface loginResponseData {
  code: number;
  data: dataType;
}

interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  role: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

export interface userType {
  checkUser: userInfo;
}

//服务器返回用户信息相关的数据类型
export interface userResponseData {
  code: number;
  data: userType;
}
