<template>
  <div class="login-container">
    <el-card class="z-1 w-100 !border-0 !bg-transparent !rounded-4% <sm:w-83">
      <h2 class="text-center">登陆</h2>
      <el-form class="text-center">
        <el-form-item>
          <el-input size="large" />
        </el-form-item>
        <el-form-item>
          <el-input size="large" />
        </el-form-item>
      </el-form>
      <el-button class="w-full" type="primary">登陆 </el-button>
    </el-card>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.login-container {
  @apply w-full h-full flex-center;

  overflow-y: auto;
  background: url("@/assets/images/login-bg.jpg") no-repeat center right;
}
</style>
