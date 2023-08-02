<!--
  @Author: yangshilin
  @Date: 2023-07-10 23:24:09
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-29 18:44:18
  @FilePath: src\views\example\components\MenuItem.vue
  @Description: desc
 -->
<template>
  <div class="menu-cont__item round-2 over-hidden pt-2 p-1 relative">
    <div class="menu-item__title relative zIndex1">
      <div class="inner-top">
        <p class="bg-white p-1 round-1">{{ example.name }}</p>
      </div>
    </div>
    <div class="menu-item__img absolute w-full h-full top-0 left-0">
      <img
        :src="getImageUrl(example.thumbnail)"
        alt=""
        class="w-full h-full cursor-pointer"
        @click="onExample(example)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Example } from "@/api/example/types.ts";
import { useRouter } from "vue-router";

const router = useRouter();
interface Props {
  example: Example;
}

function getImageUrl(name) {
  return new URL(`../../../../../../assets/images/${name}`, import.meta.url)
    .href;
}

const onExample = (example: Example) => {
  router.push({
    path: "/editView",
    query: {
      viewId: example.mark,
      component: example.component,
      name: example.name,
    },
  });
};

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
