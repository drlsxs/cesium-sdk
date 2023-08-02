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
import { useRoute } from "vue-router";
let router = useRoute();
document.title = router.query.name as string;
</script>

<template>
  <div class="editView flex">
    <editor class="percent40"></editor>
    <preview class="percent60"></preview>
  </div>
</template>

<style scoped lang="scss"></style>
