<template>
  <div class="settings-page">

    <el-form
      :model="formData"
      ref="preference"
      label-position="top">

      <el-form-item
        prop="temperature"
        label="Select the temparature range that make you happy">
        <el-slider
          v-model="formData.temparatures"
          :min="-20"
          :max="50"
          show-input-controls
          range
          vertical
          height="300px"
          input-size="large">
        </el-slider>
      </el-form-item>

      <el-form-item
        prop="conditions"
        label="Select weather conditions that you don't like">
        <el-checkbox-group v-model="formData.conditions">
          <el-checkbox-button
            v-for="item in conditionOptions"
            :label="item.label"
            :key="item.label">
            {{ item.label }}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item
        prop="wind"
        label="Select the wind speed that will not make you fall">
        <el-slider
          v-model="formData.windSpeed"
          show-input-controls
          range
          input-size="large">
        </el-slider>
      </el-form-item>

      <el-form-item>
        <el-button
          type="text"
          icon="el-icon-back"
          @click="back">
          Back
        </el-button>
        <el-button
          type="primary"
          @click="savePreferences">
          Save
        </el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'settings-page',
  data() {
    return {
      formData: {},
      conditionOptions: [
        { label: 'Thunderstorm' },
        { label: 'Drizzle' },
        { label: 'Rain' },
        { label: 'Snow' },
        { label: 'Clear' },
        { label: 'Clouds' },
      ]
    }
  },
  computed: {
    ...mapState(['setting']),
  },
  methods: {
    ...mapMutations(['set_preferences']),
    savePreferences() {
      this.$refs['preference'].validate(valid => {
        if (valid) {
          this.set_preferences(this.formData)
          this.$message({
            message: 'Preferences saved',
            type: 'success'
          })
        } else {
          this.$message({
            message: 'Something wrong happened, try again',
            type: 'danger'
          })
        }
      })
    },
    back() {
      this.$router.push({ name: 'home' })
    }
  },
  created() {
    this.formData = { ...this.setting.preferences }
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
