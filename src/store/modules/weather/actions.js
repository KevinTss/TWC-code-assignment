import { REQUEST, FAILED, SUCCESS } from '../../../_helpers/globalConstants'
import { GET_CURRENT_WEATHER } from './constants'
import service from './service'

export default {

  /**
   * getCurrentWeather
   *
   * Method who fetch the current weather base on a city
   *
   * @param {Object} Context
   * @param {Object} city
   * @return {Void}
   */
  async getCurrentWeather({ commit }, city) {
    commit(`${REQUEST}${GET_CURRENT_WEATHER}`)
    try {
      const weatherData = await service.getWeatherByCity(city)
      commit('set_weather_by_city', weatherData)
      commit(`${SUCCESS}${GET_CURRENT_WEATHER}`)
    } catch (error) {
      commit(`${FAILED}${GET_CURRENT_WEATHER}`, error.message)
    }
  }

}
