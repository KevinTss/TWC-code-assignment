import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/views/HomePage'
import SettingPage from '../components/views/SettingPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/settings',
    name: 'setting',
    component: SettingPage
  },
  {
    path: '*',
    redirect: '/inbox'
  }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
