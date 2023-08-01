<!--
  @Author: yangshilin
  @Date: 2023-07-29 22:12:01
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 22:19:00
  @FilePath: src\components\monaco\editOpt.vue
  @Description: desc
 -->

<script setup lang="ts">
const emit = defineEmits(["runCode"]);
const handleRunCode = () => {
  emit("runCode");
};
</script>

<template>
  <div class="editopt-comp flex align-center justify-between">
    <div class="left-wrap py-2 px-1 flex align-center justify-between">
      <div class="edit-file mr-1 text-white cursor-pointer">initEarth.vue</div>
      <div class="file-save-icon w2 h2 round-full bg-white hide"></div>
    </div>
    <div class="center-wrap text-white">初始化地球</div>
    <div class="right-wrap space-x-4 flex align-center mr-4">
      <div
        class="icon-box p-1 cursor-pointer hover:bg-white-300 round-1"
        @click="handleRunCode"
      >
        <svg-icon name="load" color="green"></svg-icon>
      </div>
      <div class="icon-box p-1 cursor-pointer hover:bg-white-300 round-1">
        <svg-icon name="refresh" color="yellow"></svg-icon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editopt-comp {
  background: $edit-bar-background;
  height: $edit-bar-height;
  .left-wrap {
    background: $editor-background;
  }
}
</style>
