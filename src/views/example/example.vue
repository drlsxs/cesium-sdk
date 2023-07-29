<!--
  @Author: yangshilin
  @Date: 2023-07-09 19:06:39
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 16:38:17
  @FilePath: src\views\example\index.vue
  @Description: desc
 -->
<template>
  <div id="example-container" class="flex">
    <exampleSidebar :MenuData="MenuData" />
    <exampleContent :MenuData="MenuData" />
  </div>
</template>

<script setup lang="ts">
//组件
import exampleContent from "./components/exampleContent/exampleContent.vue";
import exampleSidebar from "./components/exampleSideBar/exampleSidebar.vue";

//api
import { reqExampleInfo } from "@/api/example";
import { ref } from "vue";

// 类型约束
import { MenuConfig } from "@/api/example/types.ts";

let MenuData = ref<MenuConfig[]>([]);

//获取示例数据
const getExample = async () => {
  const r = await reqExampleInfo();
  MenuData.value = r.data;
};

getExample();
</script>
