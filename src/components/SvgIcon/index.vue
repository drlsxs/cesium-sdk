<!--
  @Author: yangshilin
  @Date: 2023-07-02 13:21:34
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-02 13:30:22
  @FilePath: src\components\SvgIcon\index.vue
  @Description: desc
 -->

<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
//接受父组件传递过来的参数
defineProps({
  //xlink:href属性值前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  //提供使用组件的名字
  name: String,
  color: {
    type: String,
    default: "",
  },
  //接受父组件传递过来的图标宽度
  width: {
    type: String,
    default: "16px",
  },
  //接受父组件传递过来的图标高度
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<style scoped></style>
