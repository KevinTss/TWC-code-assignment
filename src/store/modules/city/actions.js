import { REQUEST, FAILED, SUCCESS } from '../../../_helpers/globalConstants'
import { GET_CITIES } from './constants'
import service from './service'

export default {

  /**
   * getCities
   *
   * Method who fetch the cities
   *
   * @param {Object} Context
   * @param {Object} data
   * @return {Void}
   */
  async getCities({ commit }) {
    commit(`${REQUEST}${GET_CITIES}`)
    try {
      const cities = await service.getCities()
      commit('set_cities', cities )
      commit(`${SUCCESS}${GET_CITIES}`)
    } catch (error) {
      commit(`${FAILED}${GET_CITIES}`, error.message)
    }
  }

}
