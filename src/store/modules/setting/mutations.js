export default {

  /**
   * Set preferences
   *
   * @param {Object} state
   * @param {Array} preferences
   */
  set_preferences(state, preferences) {
    state.preferences = { ...preferences }
  },

}
