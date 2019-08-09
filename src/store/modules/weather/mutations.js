import { REQUEST, FAILED, SUCCESS } from '../../../_helpers/globalConstants'
import { GET_CURRENT_WEATHER } from './constants'

export default {

  /**
   * Set the weather as loading for a specific city
   *
   * @param {Object} state
   * @param {String} city
   */
  set_current_weather_to_loading(state, city) {
    state.list[city] = 'loading'
  },

  /**
   * Set the weather data in the store list
   *
   * @param {Object} state
   * @param {Object} data
   */
  set_weather_by_city(state, data) {
    const { city, weatherData } = data
    state.list[city] = weatherData
  },

  /**
   * Actions mutations
   *
   * They change actions object depend of the current state
   *
   * @param {Object} state
   */
  [`${REQUEST}${GET_CURRENT_WEATHER}`](state) {
    state.actions[GET_CURRENT_WEATHER].success = false
    state.actions[GET_CURRENT_WEATHER].loading = true
    state.actions[GET_CURRENT_WEATHER].error = null
  },
  [`${FAILED}${GET_CURRENT_WEATHER}`](state, errorMessage) {
    state.actions[GET_CURRENT_WEATHER].success = false
    state.actions[GET_CURRENT_WEATHER].loading = false
    state.actions[GET_CURRENT_WEATHER].error = errorMessage
  },
  [`${SUCCESS}${GET_CURRENT_WEATHER}`](state) {
    state.actions[GET_CURRENT_WEATHER].success = true
    state.actions[GET_CURRENT_WEATHER].loading = false
    state.actions[GET_CURRENT_WEATHER].error = null
  },
}
