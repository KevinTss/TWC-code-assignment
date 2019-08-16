<template>
  <div class="weather-card">

    <img :src="iconUrl" alt="Weather icon">

    <h2>{{ city }}</h2>

    <p>
      Temperature: {{ temperature }}°C
    </p>

  </div>
</template>

<script>
import { GET_WEATHER_ICON_URL } from '../../../_helpers/globalConstants'

export default {
  name: 'weather-card',
  props: {
    city: { type: String, required: true },
    mainWeather: { type: String, required: true },
    descriptionWeather: { type: String, required: true },
    temperature: { type: Number, required: true },
    windSpeed: { type: Number, required: true },
    icon: { type: String, required: true },
  },
  computed: {
    iconUrl() {
      return GET_WEATHER_ICON_URL(this.icon)
    }
  },
}
</script>

<style lang="scss" scoped>
.weather-card {}
</style>
