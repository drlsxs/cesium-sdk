/*
 * @Author: yangshilin
 * @Date: 2023-07-02 14:50:53
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 15:17:07
 * @FilePath: src\utils\request.ts
 * @Description: 请添加文件描述
 */

//进行axios的二次封装：使用它的请求和响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
//利用create方法创建axios实例，（配置：基础路径，超时时间）
const axiosInstance = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
//第二步：给实例添加请求和响应拦截器
axiosInstance.interceptors.request.use((config) => {
  //config配置对象，headers属性请求头，给服务器端携带公共参数
  //返回配置对象
  return config;
});

axiosInstance.interceptors.response.use(
  //成功的回调，简化数据
  (response) => {
    return response.data;
  },
  //失败的回调 处理http网络错误的
  (error) => {
    //定义一个变量，存储网络错误信息
    let message = "";
    const status = error.response.status;
    switch (status) {
      case 401:
        message = "TOKEN过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器出现问题";
        break;
      default:
        message = "网络出现问题";
        break;
    }
    //提示错误信息
    ElMessage({
      type: "error",
      message,
    });
    return Promise.reject(error);
  }
);

// 对外暴露
export default axiosInstance;
