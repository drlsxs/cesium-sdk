/*
 * @Author: yangshilin
 * @Date: 2023-07-02 12:47:04
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-29 20:00:42
 * @FilePath: vite.config.ts
 * @Description: 请添加文件描述
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        enable: command === "serve",
      }),
    ],
    base: "./",
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        //scss全局变量配置
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/var.scss";',
        },
      },
    },
    // 强制预构建插件包
  };
});
