<!--
  @Author: yangshilin
  @Date: 2023-07-29 16:06:58
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 17:26:54
  @FilePath: src\views\example\exampleContent.vue
  @Description: desc
 -->
<template>
  <div class="visual m-auto p-2 menus">
    <menuRow :menu="menu" :key="menu.label" v-for="menu in MenuData"></menuRow>
  </div>
</template>
<script setup lang="ts">
import { MenuConfig } from "@/api/example/types.ts";
import menuRow from "./components/menuRow.vue";
interface Props {
  MenuData: MenuConfig[];
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped lang="scss">
.visual {
  width: $visual-width;
  :deep(.menu) {
    .item-cont {
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      .menu-cont__item {
        height: $menu-cont-height;
        background: $menu-cont-back;
      }
    }
  }
}
</style>
