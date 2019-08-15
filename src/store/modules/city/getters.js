import { GET_CITIES } from './constants'

export default {

  /**
   * citiesList
   * @return {Array} - List of cities.
   */
  citiesList: state => state.list,

  /**
   * isCitiesAreLoading
   * @return {Boolean} - If cities are loading.
   */
  isCitiesAreLoading: state => state.actions[GET_CITIES].loading,

  /**
   * hasCitiesError
   * @return {Boolean} - If cities has error.
   */
  hasCitiesError: state => state.actions[GET_CITIES].error,

  /**
   * cityByName
   * @return {Object} - City.
   */
  cityByName(state) {
    return name => state.list.find(city => city.name === name)
  },

}
