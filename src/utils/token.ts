/*
 * @Author: yangshilin
 * @Date: 2023-07-02 19:52:14
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 19:54:40
 * @FilePath: src\utils\token.ts
 * @Description: 请添加文件描述
 */

//封装本都存储数据和读取数据的方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem("TOKEN", token);
};

export const GET_TOKEN = () => {
  return localStorage.getItem("TOKEN");
};
