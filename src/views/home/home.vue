<!--
  @Author: yangshilin
  @Date: 2023-07-02 15:43:42
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 16:38:23
  @FilePath: src\views\home\index.vue
  @Description: desc
 -->
<template>
  <div id="home-container">
    <div class="home-container m-auto">
      <div class="introduce mt-2 flex space-x-4">
        <div class="left-wrap w-1/2">
          <Introduce />
        </div>
        <div class="right-wrap w-1/2">图片</div>
      </div>
      <div class="feature text-white mt-2 flex space-x-4 justify-between">
        <div class="feature-item w-1/3 p-2 bg-black">
          <h2 class="mb-2">易学易用</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            assumenda commodi debitis dolores eius fugit nam officiis pariatur?
            Esse, repudiandae?
          </p>
        </div>
        <div class="feature-item w-1/3 p-2 bg-black">
          <h2 class="mb-2">易学易用</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            assumenda commodi debitis dolores eius fugit nam officiis pariatur?
            Esse, repudiandae?
          </p>
        </div>
        <div class="feature-item w-1/3 p-2 bg-black">
          <h2 class="mb-2">易学易用</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            assumenda commodi debitis dolores eius fugit nam officiis pariatur?
            Esse, repudiandae?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Introduce from "@/views/home/components/introduce.vue";
</script>

<style scoped lang="scss">
#home-container {
  .home-container {
    max-width: $main-max-width;
  }
}
</style>
