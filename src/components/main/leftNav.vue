<template>
  <el-menu class="leftNav" :router="true">
    <el-menu-item index="/">
      <i class="el-icon-setting"></i>
      <g-link slot="title" to="/">最新动态</g-link>
    </el-menu-item>
    <el-menu-item index="/socials">
      <i class="el-icon-setting"></i>
      <g-link slot="title" to="/socials">社交圈</g-link>
    </el-menu-item>
    <el-menu-item index="/blogs">
      <i class="el-icon-setting"></i>
      <g-link slot="title" to="/blogs">博客列表</g-link>
    </el-menu-item>
    <el-menu-item index="/repos">
      <i class="el-icon-setting"></i>
      <g-link slot="title" to="/repos">开源项目</g-link>
    </el-menu-item>
  </el-menu>
</template>
<style scoped>
.leftNav{
  border-right: none;
  margin-right: 1em;
}
</style>