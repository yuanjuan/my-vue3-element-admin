<script setup lang="ts">
import Main from "./main.vue";
import SideBar from "./components/SideBar/index.vue";
</script>
<template>
  <div class="app-wrapper">
    <SideBar />
    <Main></Main>
  </div>
</template>
<style lang="scss" scoped>
.app-wrapper {
  display: flex;
}
</style>
