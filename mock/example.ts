/*
 * @Author: yangshilin
 * @Date: 2023-07-29 13:46:07
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-29 15:58:40
 * @FilePath: mock\sidebar.ts
 * @Description: 请添加文件描述
 */

// 示例数据和侧边栏
import { MockMethod } from "vite-plugin-mock";

function exampleTree() {
  return [
    {
      label: "快速开始",
      nums: 10,
      children: [
        {
          label: "Lorem kkk",
          nums: 88,
          children: [
            {
              mark: "quickstart/lorem/initEarth",
              name: "Lorem ipsum dolor sit amet",
              thumbnail: "",
            },
            {
              mark: "quickstart/lorem/initEarth2",
              name: "Lorem dolor sit amet",
              thumbnail: "",
            },
          ],
        },
        {
          label: "Lorem ccc",
          nums: 88,
        },
      ],
    },
    {
      label: "广泛广泛",
      nums: 11,
      children: [
        {
          label: "Lorem 00000",
          nums: 99,
        },
      ],
    },
  ];
}

export default [
  // 用户登录接口
  {
    url: "/api/example/tree", //请求地址
    method: "get", //请求方式
    response: () => {
      console.log(this);
      const example = exampleTree();
      return {
        code: 200,
        data: example,
      };
    },
  },
] as MockMethod[];
