<!--
  @Author: yangshilin
  @Date: 2023-07-09 19:06:39
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-10 23:46:58
  @FilePath: src\views\example\index.vue
  @Description: desc
 -->
<template>
  <div id="example-container" class="flex">
    <div class="sidebar p-2">
      <div class="sidebar-inner w-full h-full">
        <SideYiItem v-for="meun in MenuData" :key="meun.label" :menu="meun">
          <SideErItem :child="meun.children" />
        </SideYiItem>
      </div>
    </div>
    <div class="visual m-auto p-2">
      <div class="menu">
        <div class="menu-title py-2">
          <h2>快速开始</h2>
        </div>
        <MenuItem>
          <MenuCont />
        </MenuItem>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#example-container {
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
  .visual {
    width: $visual-width;
    .menu {
      :deep(.item-cont) {
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        .menu-cont__item {
          height: $menu-cont-height;
          background: $menu-cont-back;
        }
      }
    }
  }
}
</style>
<script setup lang="ts">
import SideYiItem from "@/views/example/components/SideYiItem.vue";
import SideErItem from "@/views/example/components/SideErItem.vue";
import { MenuConfig } from "@/views/example/types";
import MenuItem from "@/views/example/components/MenuItem.vue";
import MenuCont from "@/views/example/components/MenuCont.vue";

const MenuData: MenuConfig[] = [
  {
    label: "快速开始",
    nums: 10,
    children: [
      {
        label: "Lorem kkk",
        nums: 88,
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
</script>
