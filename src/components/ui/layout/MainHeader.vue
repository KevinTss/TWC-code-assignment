<template>
  <el-header class="main-header">

    <el-row>

      <el-col :span="6">
        <el-image
          class="logo"
          :src="logoUrl"
          fit="contain"
        ></el-image>
      </el-col>

      <el-col :span="18">
        <!-- nav -->
      </el-col>

    </el-row>

  </el-header>
</template>

<script>
import logo from '../../../assets/images/openweather.png'

export default {
  name: 'main-header',
  computed: {
    logoUrl: () => logo
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/index";

.main-header {
  background-color: $background-dark;

  .el-row {
    .el-col {
      display: flex;
      align-items: center;
      height: 60px;

      .logo { height: 45px }
    }
  }
}
</style>
