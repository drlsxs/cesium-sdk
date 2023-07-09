/*
 * @Author: yangshilin
 * @Date: 2023-07-02 16:37:57
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 19:55:33
 * @FilePath: src\store\modules\user.ts
 * @Description: 请添加文件描述
 */

//创建用户相关的小仓库
import { defineStore } from "pinia";
import { loginForm } from "@/api/user/type";
import { reqLogin } from "@/api/user";
import { UserState } from "@/store/modules/types/type";
import { GET_TOKEN, SET_TOKEN } from "@/utils/token";
//创建用户小仓库
const useUserStore = defineStore("User", {
  //存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识
    };
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的地方
    async userLogin(data: loginForm) {
      //登录请求
      const r = await reqLogin(data);
      //登录成功：成功200 -> token
      //灯饰失败：失败201 -> 登录失败错误信息
      if (r.code == 200) {
        //pinia存储一下token
        this.token = r.data.token as string;
        //本地存储持久化一份
        SET_TOKEN(this.token);
        return "ok";
      } else {
        return Promise.reject(new Error(r.data.message as string));
      }
    },
  },
  //计算属性
  getters: {},
});
//对外暴露获取小仓库的地方

export default useUserStore;
