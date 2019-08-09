import { GET_CURRENT_WEATHER } from './constants'

export default {

  /**
   * List of weather data (by id)
   */
  list: {},

  /**
   * List of actions states
   */
  actions: {
    [GET_CURRENT_WEATHER]: {
      success: false,
      loading: false,
      error: null
    }
  }
}
