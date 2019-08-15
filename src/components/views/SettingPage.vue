<template>
  <div class="settings-page">

    <el-form
      :model="formData"
      ref="preference"
      label-position="top">

      <el-form-item
        prop="email"
        label="Email">
        <el-slider
          v-model="formData.temparatures"
          range>
        </el-slider>
      </el-form-item>

      <el-form-item
        prop="email"
        label="Email">
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'settings-page',
  data() {
    return {
      formData: {
        temparatures: [-10, 20]
      }
    }
  },
  computed: {
    ...mapGetters(['citiesList', 'isCitiesAreLoading']),
  },
  methods: {
    ...mapActions(['save']),
    savePreferences() {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
  },
  watch: {

  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
.settings-page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
