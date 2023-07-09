<!--
  @Author: yangshilin
  @Date: 2023-07-09 19:06:39
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-09 20:31:13
  @FilePath: src\views\example\index.vue
  @Description: desc
 -->
<template>
  <div id="example-container" class="flex">
    <div class="sidebar"></div>
    <div class="visual">
      <div class="menu">
        <div class="menu-item p-1">
          <div class="item-cont mb-2 grid gap2">
            <div class="menu-cont__item p-1">
              <div class="menu-item__inner">
                <div class="inner-top">
                  <p class="bg-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="inner-bottom"></div>
              </div>
            </div>
            <div class="menu-cont__item p-1">
              <div class="menu-item__inner">
                <div class="inner-top">
                  <p class="bg-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="inner-bottom"></div>
              </div>
            </div>
            <div class="menu-cont__item p-1">
              <div class="menu-item__inner">
                <div class="inner-top">
                  <p class="bg-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="inner-bottom"></div>
              </div>
            </div>
            <div class="menu-cont__item p-1">
              <div class="menu-item__inner">
                <div class="inner-top">
                  <p class="bg-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="inner-bottom"></div>
              </div>
            </div>
            <div class="menu-cont__item p-1">
              <div class="menu-item__inner">
                <div class="inner-top">
                  <p class="bg-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="inner-bottom"></div>
              </div>
            </div>
            <div class="menu-cont__item p-1">
              <div class="menu-item__inner">
                <div class="inner-top">
                  <p class="bg-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="inner-bottom"></div>
              </div>
            </div>
            <div class="menu-cont__item p-1">
              <div class="menu-item__inner">
                <div class="inner-top">
                  <p class="bg-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="inner-bottom"></div>
              </div>
            </div>
            <div class="menu-cont__item p-1">
              <div class="menu-item__inner">
                <div class="inner-top">
                  <p class="bg-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="inner-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
#example-container {
  .sidebar {
    width: $sidebar-width;
    min-width: $sidebar-min-width;
  }
  .visual {
    width: $visual-width;
    margin: 0 auto;
    .menu {
      .item-cont {
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        .menu-cont__item {
          height: $menu-cont-height;
          background: $menu-cont-back;
        }
      }
    }
  }
}
</style>
