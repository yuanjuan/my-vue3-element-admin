<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
// 状态管理依赖
import { useCounterStore } from "@/store/counter";
import { useUserStore } from "@/store/modules/user";

import { LoginData } from "@/api/auth/types";

const counterStore = useCounterStore();
const userStore = useUserStore();

const loginData = ref<LoginData>({
  username: "admin",
  password: "123456",
});
</script>

<template>
  <div>
    <el-button type="primary" @click="counterStore.increment">count++</el-button>
    <el-button type="primary" @click="userStore.login(loginData)">测试一下登陆</el-button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
