<!--
  @Author: yangshilin
  @Date: 2023-07-29 16:06:32
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 16:52:23
  @FilePath: src\views\example\exampleSidebar.vue
  @Description: desc
 -->
<template>
  <div class="sidebar p-2">
    <div class="sidebar-inner w-full h-full">
      <sideBarYiItem v-for="meun in MenuData" :key="meun.label" :menu="meun">
        <sideBarErItem :child="meun.children" />
      </sideBarYiItem>
    </div>
  </div>
</template>
<script setup lang="ts">
import sideBarYiItem from "./components/sideBarYiItem.vue";
import sideBarErItem from "./components/sideBarErItem.vue";
import { MenuConfig } from "@/api/example/types.ts";
interface Props {
  MenuData: MenuConfig[];
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang="scss" scoped>
.sidebar {
  width: $sidebar-width;
  min-width: $sidebar-min-width;
  max-width: $sidebar-max-width;
  background: $slider-background;
  height: calc(100vh - $header-height);
  .sidebar-inner {
    :deep(.sidebar-1) {
      .side1-item {
        &.active {
          background: $slider-item-active-background;
        }
      }
    }
  }
}
</style>
