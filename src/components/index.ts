/*
 * @Author: yangshilin
 * @Date: 2023-07-02 13:51:42
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 14:01:46
 * @FilePath: src\components\index.ts
 * @Description: 请添加文件描述
 */
//引入组件
import SvgIcon from "./SvgIcon/index.vue";
//全局对象
const allGlobalComponent = {
  SvgIcon,
};

export default {
  // 务必叫install 方法
  install(app) {
    //注册
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });
  },
};
