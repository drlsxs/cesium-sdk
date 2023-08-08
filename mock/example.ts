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
      icon: "quick-start",
      children: [
        {
          label: "Lorem kkk",
          nums: 88,
          children: [
            {
              mark: "quickstart/lorem/initEarth",
              name: "初始化地球",
              thumbnail: "map-create-options.jpg",
              component: "initEarth",
            },
            {
              mark: "quickstart/lorem/initEarth2",
              name: "根据配置文件创建地球",
              thumbnail: "map-create-json.jpg",
              component: "initEarth2",
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
      icon: "quick-start",
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
