<!--
  @Author: yangshilin
  @Date: 2023-07-02 20:32:37
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-10 23:38:00
  @FilePath: src\layout\index.vue
  @Description: desc
 -->
<template>
  <div id="header-layout">
    <div class="header flex m-auto justify-between align-center">
      <div class="left-wrap flex space-x-4">
        <div class="logo-wrap flex align-center">logo|cesium</div>
        <div class="logo-wrap">
          <div class="input-wrap flex align-center bg-white round-md p-1">
            <SvgIcon name="search" />
            <input type="text" class="back-none" />
          </div>
        </div>
      </div>
      <div class="right-wrap flex space-x-4">
        <div class="nav-wrap">
          <ul class="flex space-x-4">
            <li>教程</li>
            <li>API</li>
            <router-link to="/example">
              <li>示例</li>
            </router-link>
          </ul>
        </div>
        <div class="link-wrap f-right">
          <ul class="flex space-x-4">
            <li>
              <a href="">
                <SvgIcon name="weixin" />
              </a>
            </li>
            <li>
              <a href="">
                <SvgIcon name="github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#header-layout {
  background: $header-background;
  color: $header-color;
  .header {
    height: $header-height;
    max-width: $header-max-width;
  }
}
</style>
