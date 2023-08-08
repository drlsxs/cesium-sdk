<!--
  @Author: yangshilin
  @Date: 2023-07-10 23:26:43
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 17:05:22
  @FilePath: src\views\example\components\MenuItem.vue
  @Description: desc
 -->
<template>
  <div class="menu-item p-1">
    <div class="menu-sub-title py-1">
      {{ child.label }}
    </div>
    <div class="item-cont mb-2 grid gap6">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuChildConfig } from "@/api/example/types.ts";
import { ref } from "vue";

interface Props {
  child: MenuChildConfig;
}

const props = withDefaults(defineProps<Props>(), {});

const a = 1;
const b = ref(2);

// 像 defineExpose 这样的编译器宏不需要导入
defineExpose({
  a,
  b,
});
</script>

<style scoped></style>
