<!--
  @Author: yangshilin
  @Date: 2023-07-10 22:55:19
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 16:51:51
  @FilePath: src\views\example\components\SideErItem.vue
  @Description: desc
 -->
<template>
  <div class="sidebar-1">
    <div
      class="side1-item round-1 mb-1 cursor-pointer flex align-center p-2"
      :class="{ active: menuAc }"
    >
      <i>
        <svgIcon :name="menu.icon" />
      </i>
      <p class="flex1 p-1">{{ menu.label }} ({{ menu.nums }})</p>
      <i class="arrow">
        <svgIcon name="right-arrow" />
      </i>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { MenuConfig } from "@/api/example/types.ts";

const props = defineProps<{
  menu: MenuConfig;
  menuAc: boolean;
}>();
</script>

<style scoped lang="scss">
.side1-item.active {
  .arrow {
    svg {
      transform: rotate(90deg);
      transition: all 0.4s ease;
    }
  }
}
</style>
