<template>
  <el-container>

    <main-header/>

    <el-main>
      <router-view/>
    </el-main>

  </el-container>
</template>

<script>
import MainHeader from './components/ui/layout/MainHeader'

export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
@import './assets/styles/index';

.el-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
