<!--
  @Author: yangshilin
  @Date: 2023-07-10 22:54:11
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 16:51:37
  @FilePath: src\views\example\components\SideYiItem.vue
  @Description: desc
 -->
<template>
  <div class="sidebar-2 ml-6">
    <div
      class="side2-item p-1 cursor-pointer flex align-center"
      v-for="item in child"
      :key="item.label"
    >
      <div class="circle w2 h2 round-full bg-white mr-4"></div>
      <div class="name">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuChildConfig } from "@/views/example/types";

const props = defineProps<{
  child: MenuChildConfig[];
}>();
</script>

<style scoped></style>
