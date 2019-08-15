import HttpClient from '../../../_helpers/HttpClient'

const API = new HttpClient('')

export default {

  /**
   * getCities
   */
  getCities() {
    return API.get('/city.list.json')
  },

}
