<template>
  <div class="login-container">
    <el-card class="z-1 w-100 !border-0 !bg-transparent !rounded-4% <sm:w-83">
      <h2 class="text-center">登陆</h2>
      <el-form class="text-center">
        <el-form-item>
          <div class="p-2">
            <svg-icon icon-class="user" />
          </div>
          <el-input class="flex-1" size="large" />
        </el-form-item>
        <el-form-item>
          <div class="p-2">
            <svg-icon icon-class="password" />
          </div>
          <el-input class="flex-1" size="large" />
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

.el-form-item {
  background: var(--el-input-bg-color);
  border: 1px solid var(--el-border-color);
  border-radius: 5px;
}

:deep(.el-input) {
  /* stylelint-disable-next-line selector-class-pattern */
  .el-input__wrapper {
    padding: 0;
    background-color: transparent;
    box-shadow: none;

    &.is-focus,
    &:hover {
      box-shadow: none !important;
    }

    input:-webkit-autofill {
      transition: background-color 1000s ease-in-out 0s; /* 通过延时渲染背景色变相去除背景颜色 */
    }
  }
}
</style>
