<template>
  <el-menu class="leftNav">
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <g-link slot="title" to="/new">最新动态</g-link>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <g-link slot="title" to="/social">社交圈</g-link>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <g-link slot="title" to="/blogs">博客列表</g-link>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <g-link slot="title" to="/project">开源项目</g-link>
    </el-menu-item>
  </el-menu>
</template>
<style scoped>
.leftNav{
  border-right: none;
}
</style>