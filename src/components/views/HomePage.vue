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


      <transition name="fade">
        <weather-card
          v-if="currentWeather"
          :city="currentWeather.name"
          :main-weather="currentWeather.weather[0].main"
          :description-weather="currentWeather.weather[0].description"
          :temperature="currentWeather.main.temp"
          :wind-speed="currentWeather.wind.speed"
          :icon="currentWeather.weather[0].icon"
        />
      </transition>

      <el-alert
        v-if="currentWeather"
        :title="`Today is for you a ${isGoodDay ? 'good' : 'bad'} day!`"
        :type="isGoodDay ? 'success' : 'error'"
        :description="alertDescription"
        effect="dark">
      </el-alert>

    </el-container>

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import WeatherCard from '../ui/card/WeatherCard'

export default {
  name: 'home-page',
  components: { WeatherCard },
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
    ...mapState(['setting']),
    ...mapGetters([
      'citiesList',
      'isCitiesAreLoading',
      'isWeatherLoading',
      'hasWeatherError',
      'weatherByCity'
    ]),
    currentWeather() {
      return this.weatherByCity(this.formData.city)
    },
    currentPreferences() {
      return this.setting.preferences
    },
    isPreferencesMatch() {
      return {
        isTempOk: this.currentWeather && this.currentWeather.main.temp >= this.currentPreferences.temparatures[0] && this.currentWeather.main.temp <= this.currentPreferences.temparatures[1],
        isWindOk: this.currentWeather && this.currentWeather.wind.speed >= this.currentPreferences.windSpeed[0] && this.currentWeather.wind.speed <= this.currentPreferences.windSpeed[1],
        isConditionsOk: this.currentWeather && !this.currentPreferences.conditions.includes(this.currentWeather.weather[0].main)
      }
    },
    isGoodDay() {
      return this.isPreferencesMatch.isTempOk && this.isPreferencesMatch.isWindOk && this.isPreferencesMatch.isConditionsOk
    },
    alertDescription() {
      const infoText = "Change your preferences in settings page"
      if (!this.isGoodDay) {
        const unMatchesData = []
        !this.isPreferencesMatch.isTempOk && unMatchesData.push('Temperature')
        !this.isPreferencesMatch.isWindOk && unMatchesData.push('Wind')
        !this.isPreferencesMatch.isConditionsOk && unMatchesData.push('Condition')
        return `You don't like: ${unMatchesData.reduce((acc, value) => `${acc}, ${value}`)} (${infoText})`
      }
      return infoText
    }
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
          this.getCurrentWeather(this.formData.city)
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
    },
    isWeatherLoading(newLoading) {
      if (!newLoading && this.hasWeatherError) {
        this.$message.error(this.hasWeatherError)
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
