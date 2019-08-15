import { REQUEST, FAILED, SUCCESS } from '../../../_helpers/globalConstants'
import { GET_CITIES } from './constants'

export default {

  /**
   * Set cities in the store list
   *
   * @param {Object} state
   * @param {Array} cities
   */
  set_cities(state, cities) {
    state.list = cities.splice(0, 1000)
  },

  /**
   * Actions mutations
   *
   * They change actions object depend of the current state
   *
   * @param {Object} state
   */
  [`${REQUEST}${GET_CITIES}`](state) {
    state.actions[GET_CITIES].success = false
    state.actions[GET_CITIES].loading = true
    state.actions[GET_CITIES].error = null
  },
  [`${FAILED}${GET_CITIES}`](state, errorMessage) {
    state.actions[GET_CITIES].success = false
    state.actions[GET_CITIES].loading = false
    state.actions[GET_CITIES].error = errorMessage
  },
  [`${SUCCESS}${GET_CITIES}`](state) {
    state.actions[GET_CITIES].success = true
    state.actions[GET_CITIES].loading = false
    state.actions[GET_CITIES].error = null
  },
}
