<!--
  @Author: yangshilin
  @Date: 2023-07-10 22:55:19
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-10 23:17:04
  @FilePath: src\views\example\components\SideErItem.vue
  @Description: desc
 -->
<template>
  <div class="sidebar-1">
    <div
      class="side1-item round-1 mb-1 cursor-pointer active flex align-center p-2"
    >
      <i>
        <SvgIcon name="weixin" />
      </i>
      <p class="flex1 p-1">{{ menu.label }} ({{ menu.nums }})</p>
      <i>
        <SvgIcon name="weixin" />
      </i>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { MenuConfig } from "@/views/example/types";

const props = defineProps<{
  menu: MenuConfig;
}>();
</script>

<style scoped></style>
