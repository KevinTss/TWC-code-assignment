import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import weather from './modules/weather'
import city from './modules/city'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  plugins: process.env.NODE_ENV === 'development' ? [ createLogger() ] : [],
  modules: {
    weather,
    city
  }
})
