<script setup lang="ts">
import { ref } from "vue";
import variables from "@/styles/variables.module.scss";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="text-red">{{ msg }}</h1>
  <div class="card box">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div>
    <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
    <el-button type="info"><i-ep-InfoFilled />Info</el-button>
    <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
    <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
    <el-button type="info"><svg-icon icon-class="vue" />SVG 本地图标</el-button>
  </div>
  <div style="width: 100px; height: 100px" :style="{ 'background-color': variables.bgColor }" />
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}

.box {
  width: 100px;
  height: 100px;
  background-color: $bg-color;
}
</style>
