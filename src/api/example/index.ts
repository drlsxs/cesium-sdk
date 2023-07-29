/*
 * @Author: yangshilin
 * @Date: 2023-07-29 13:53:41
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-29 13:59:01
 * @FilePath: src\api\example\index.ts
 * @Description: 请添加文件描述
 */
// 统一管理项目示例的接口
import request from "@/utils/request";
import { ExampleResponse } from "@/api/example/types.ts";
//统一管理接口
enum API {
  EXAMPLE = "/example/tree",
}

//暴露请求函数

// 示例数据
export const reqExampleInfo = () =>
  request.get<any, ExampleResponse>(API.EXAMPLE);
