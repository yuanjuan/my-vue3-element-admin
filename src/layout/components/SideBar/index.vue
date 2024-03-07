<script setup lang="ts">
import Logo from "./Logo.vue";
import LeftMenu from "./LeftMenu.vue";
</script>
<template>
  <div class="menu-wrap">
    <logo></logo>
    <el-scrollbar>
      <LeftMenu></LeftMenu>
    </el-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
.menu-wrap {
  width: 250px;
  height: 100vh;
}
</style>
