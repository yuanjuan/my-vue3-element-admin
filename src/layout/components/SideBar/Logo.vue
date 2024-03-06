<script setup lang="ts">
const logo = ref(new URL(`./../../../assets/logo.png`, import.meta.url).href);
</script>
<template>
  <div class="w-full h-[50px] bg-gray-800 dark:bg-[var(--el-bg-color-overlay)] logo-wrap">
    <router-link class="w-full h-full flex justify-center items-center" to="/">
      <img class="w-5 h-5" :src="logo" />
      <span class="ml-3 text-white font-bold text-sm">XXX系统</span>
    </router-link>
  </div>
</template>
