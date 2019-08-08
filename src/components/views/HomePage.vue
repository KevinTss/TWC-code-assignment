<template>
  <el-container class="home-page">

    <main-header/>

    <el-main>Main</el-main>

  </el-container>
</template>

<script>
import MainHeader from '../ui/layout/MainHeader'

export default {
  name: 'home-page',
  components: { MainHeader }
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  .el-main {
    // background-color: red;
  }
}
</style>
