import { GET_CURRENT_WEATHER } from './constants'

export default {

  /**
   * weatherCityList
   * @return {Array} - List of weather cities.
   */
  weatherCityList: state => Object.keys(state.list),

  /**
   * weatherDataList
   * @return {Array} - List of weather data.
   */
  weatherDataList: state => Object.values(state.list),

  /**
   * isWeatherLoading
   * @return {Boolean} - If offer is loading.
   */
  isWeatherLoading: state => state.actions[GET_CURRENT_WEATHER].loading,

  /**
   * hasWeatherError
   * @return {String|Null} - If weather has error.
   */
  hasWeatherError: state => state.actions[GET_CURRENT_WEATHER].error,

  /**
   * weatherByCity
   * @param {String} city
   * @return {Function} - This function return a specific city weather.
   */
  weatherByCity(state) {
    return city => state.list[city]
  },

}
