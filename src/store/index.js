import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
