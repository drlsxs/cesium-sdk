/*
 * @Author: yangshilin
 * @Date: 2023-07-10 23:02:51
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-29 15:24:21
 * @FilePath: src\views\example\types.ts
 * @Description: 请添加文件描述
 */

export interface MenuConfig {
  label: string;
  nums: number;
  children?: MenuChildConfig[];
}

export interface MenuChildConfig {
  label: string;
  nums: number;
  children?: Example[];
}

export interface Example {
  mark: string;
  name: string;
  thumbnail: string;
  component: string;
}

export interface ExampleResponse {
  code: number;
  data: MenuConfig[];
}
