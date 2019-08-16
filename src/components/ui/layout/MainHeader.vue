<template>
  <el-header class="main-header">

    <el-row>

      <el-col :span="6">
        <el-image
          class="logo"
          :src="logoUrl"
          fit="contain"
          @click="goToHome"
        ></el-image>
      </el-col>

      <el-col :span="18" class="menu">
        <el-button
          icon="el-icon-setting"
          type="primary"
          @click="goToSettings">
        </el-button>
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
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' })
    },
    goToSettings() {
      this.$router.push({ name: 'setting' })
    }
  }
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

      &.menu {
        justify-content: flex-end;
        padding-right: 20px;
      }

      .logo {
        height: 45px;
        cursor: pointer;
      }
    }
  }
}
</style>
