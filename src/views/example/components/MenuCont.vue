<!--
  @Author: yangshilin
  @Date: 2023-07-10 23:24:09
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-10 23:26:26
  @FilePath: src\views\example\components\MenuItem.vue
  @Description: desc
 -->
<template>
  <div class="menu-cont__item round-2 over-hidden pt-2 p-1 relative">
    <div class="menu-item__title relative zIndex1">
      <div class="inner-top">
        <p class="bg-white p-1 round-1">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div class="menu-item__img absolute w-full h-full top-0 left-0">
      <img
        src="@/assets/images/map-create-options.jpg"
        alt=""
        class="w-full h-full cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
