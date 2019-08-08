<template>
  <div class="home-page">
    Hello world

    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {
      value1: null
    }
  }
}
</script>

<style lang="scss" scoped>
.nahome-pageme {}
</style>
