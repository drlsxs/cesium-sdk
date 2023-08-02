/*
 * @Author: yangshilin
 * @Date: 2023-07-02 13:51:42
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-29 19:30:00
 * @FilePath: src\components\index.ts
 * @Description: 请添加文件描述
 */
//引入组件
import svgIcon from "./svgIcon/svgIcon.vue";
// 示例组件
//全局对象
const allGlobalComponent: { [index: string]: any } = {
  svgIcon,
};

export default {
  // 务必叫install 方法
  install(app: any) {
    //注册
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });
  },
};
