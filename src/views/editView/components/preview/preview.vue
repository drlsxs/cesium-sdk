<!--
  @Author: yangshilin
  @Date: 2023-07-29 17:30:49
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 19:30:02
  @FilePath: src\views\editVIew\components\preview\preview.vue
  @Description: desc
 -->
<script setup lang="ts">
import fetchComponentFromString from "@/utils/fetchComponent.ts";
import { shallowRef } from "vue";
import emitter from "@/utils/bus.ts";
let component = shallowRef(null);
emitter.on("code", () => {
  component.value = fetchComponentFromString("../editView.vue");
});

emitter.on("run", () => {
  component.value = fetchComponentFromString("../editView.vue");
});
</script>

<template>
  <component :is="component"></component>
</template>

<style scoped></style>
