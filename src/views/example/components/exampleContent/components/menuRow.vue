<!--
  @Author: yangshilin
  @Date: 2023-07-29 17:04:35
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 18:37:21
  @FilePath: src\views\example\components\exampleContent\components\menuRow.vue
  @Description: desc
 -->
<template>
  <div class="menu">
    <category :title="menu.label" />
    <menuItem
      v-for="child in menu.children"
      :child="child"
      :key="child.label"
      ref="menuItems"
    >
      <menuCont
        v-for="example in child.children"
        :example="example"
        :key="example.name"
      ></menuCont>
    </menuItem>
  </div>
</template>
<script setup lang="ts">
import category from "./components/category.vue";
import menuItem from "./components/menuItem.vue";
import menuCont from "./components/menuCont.vue";
import { MenuConfig } from "@/api/example/types.ts";
import { onMounted, ref } from "vue";

let menuItems = ref([]);

interface Props {
  menu: MenuConfig;
}

onMounted(() => {
  console.log(menuItems.value[0].a, 12);
});

const props = withDefaults(defineProps<Props>(), {});
</script>
