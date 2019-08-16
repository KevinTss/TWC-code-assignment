<template>
  <div class="home-page">

    <el-container>

      <h1>How is your day buddy ?</h1>

      <p>
        Hi there!<br>
        Please enter your city to get the current wheather
      </p>

      <el-form
        :model="formData"
        :rules="rulesForm"
        ref="weather"
        label-position="top">

        <el-form-item
          prop="city"
          label="City"
          >
          <el-input v-model="formData.city"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitCity">
            Is that a good day ?
          </el-button>
        </el-form-item>

      </el-form>

    </el-container>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home-page',
  data() {
    return {
      formData: {
        city: null
      },
      rulesForm: {
        city: [{ required: true, message: 'Please enter a city', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapGetters(['citiesList', 'isCitiesAreLoading']),
  },
  methods: {
    ...mapActions(['getCurrentWeather', 'getCities']),
    remoteMethod(query) {
      if (query !== '') {
        this.options = this.citiesList.filter(item => {
          const cityName = item.name.toLowerCase()
          const userInput = RegExp(query.toLowerCase())
          const isMatch = userInput.test(cityName)
          return isMatch
        })
      } else {
        this.options = [];
      }
    },
    submitCity() {
      this.$refs['weather'].validate(valid => {
        if (valid) {
          this.getCurrentWeather({
            city: 'London'
          })
          //////////
        } else {
          this.$message({
            message: 'Something wrong happened, try again',
            type: 'error'
          })
        }
      })
    },
  },
  watch: {
    isCitiesAreLoading(newLoading) {
      if (!newLoading && !this.hasCitiesError) {
        this.options = this.citiesList
      } else if (!newLoading && this.hasCitiesError) {
        this.$message.error(this.hasCitiesError)
      }
    }
  },
  created() {
    !this.citiesList && this.getCities()
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
