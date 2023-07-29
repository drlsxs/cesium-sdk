<!--
  @Author: yangshilin
  @Date: 2023-07-29 16:59:34
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 19:16:37
  @FilePath: src\views\editVIew\editView.vue
  @Description: desc
 -->
<script setup lang="ts">
import editor from "./components/editor/editor.vue";
import preview from "./components/preview/preview.vue";
</script>

<template>
  <div class="editView flex">
    <editor class="flex4"></editor>
    <preview class="flex6"></preview>
  </div>
</template>

<style scoped lang="scss"></style>
