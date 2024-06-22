<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const xxx = 100;

</script>

<template>
  <el-button type="primary">测试element plus</el-button>
  <div class="demo-box">
    <div class="tips"></div>
  </div>
</template>

<style lang="scss" scoped>
/* 测试scss代码 */
.demo-box {
  background-color: $theme-color;
  width: $main-width;
  height: $main-height;
  .tips {
    color: red;
  }
}
</style>
