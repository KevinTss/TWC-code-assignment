import HttpClient from '../../../_helpers/HttpClient'
import { OPEN_WEATHER_KEY, WEATHER_API_BASE_URL } from '../../../_helpers/globalConstants'

const API = new HttpClient(WEATHER_API_BASE_URL)

export default {

  /**
   * getWeatherByCity
   * @param {String} city
   */
  getWeatherByCity(city) {
    return API.get(`weather?q=${city}&units=metric&appid=${OPEN_WEATHER_KEY}`)
  },

}
