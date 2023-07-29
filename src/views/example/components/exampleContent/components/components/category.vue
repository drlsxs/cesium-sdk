<!--
  @Author: yangshilin
  @Date: 2023-07-29 15:12:15
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 17:05:08
  @FilePath: src\views\example\components\Category.vue
  @Description: desc
 -->
<template>
  <div class="menu-title px-2">
    <h2>{{ title }}</h2>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "标题",
});
</script>
