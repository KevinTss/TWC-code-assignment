import { GET_CITIES } from './constants'

export default {

  /**
   * List of cities
   */
  list: [],

  /**
   * List of actions states
   */
  actions: {
    [GET_CITIES]: {
      success: false,
      loading: false,
      error: null
    }
  }
}
