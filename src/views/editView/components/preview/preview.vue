<!--
  @Author: yangshilin
  @Date: 2023-07-29 17:30:49
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 19:30:02
  @FilePath: src\views\editVIew\components\preview\preview.vue
  @Description: desc
 -->
<script setup lang="ts">
import { useRoute } from "vue-router";

let router = useRoute();

let component = router.query.component as string;
</script>

<template>
  <div class="preview">
    <component :is="component"></component>
  </div>
</template>

<style scoped></style>
