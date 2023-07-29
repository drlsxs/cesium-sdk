<!--
  @Author: yangshilin
  @Date: 2023-07-09 18:14:48
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 16:40:09
  @FilePath: src\layout\index.vue
  @Description: desc
 -->

<template>
  <HeaderLayout />
  <router-view />
</template>

<script lang="ts" setup>
import HeaderLayout from "./header/header.vue";
</script>
