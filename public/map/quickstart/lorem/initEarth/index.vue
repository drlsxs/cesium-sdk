<!--
  @Author: yangshilin
  @Date: 2023-07-29 17:56:34
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 19:39:14
  @FilePath: src\views\demo\initEarth\initEarth.vue
  @Description: 初始化地球
 -->
<script setup lang="ts">
import * as Cesium from "cesium";
import { onMounted } from "vue";
let viewer = null;
onMounted(() => {
  viewer = new Cesium.Viewer("cesiumContainer");
});
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped lang="scss">
#cesiumContainer {
  height: calc(100vh - $header-height);
}
</style>
