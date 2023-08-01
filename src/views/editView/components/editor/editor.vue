<!--
  @Author: yangshilin
  @Date: 2023-07-29 17:30:49
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 22:16:56
  @FilePath: src\views\editVIew\components\editor\editor.vue
  @Description: desc
 -->
<script setup lang="ts">
import monaco from "@/components/monaco/monaco.vue";
import axios from "axios";
import { ref } from "vue";

let code = ref("");

const fetchSourceCode = () => {
  axios.get("map/quickstart/lorem/initEarth/index.vue").then((r) => {
    code.value = r.data;
  });
};
fetchSourceCode();
</script>

<template>
  <div class="editor">
    <monaco :code="code" v-if="code"></monaco>
  </div>
</template>

<style scoped lang="scss">
.editor {
  height: calc(100vh - $header-height) !important;
  :deep(#codeEditBox) {
    height: calc(100% - $edit-bar-height);
  }
}
</style>
