<!--
  @Author: yangshilin
  @Date: 2023-07-29 17:30:49
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 19:47:13
  @FilePath: src\views\editVIew\components\editor\editor.vue
  @Description: desc
 -->
<script setup lang="ts">
import monaco from "@/components/monaco/monaco.vue";
</script>

<template>
  <div class="editor">
    <monaco></monaco>
  </div>
</template>

<style scoped lang="scss">
.editor {
  height: calc(100vh - $header-height) !important;
  #codeEditBox {
    height: 100%;
  }
}
</style>
