import Vue from 'vue'
import Vuex from 'vuex'
import state  from './loja/state'
import mutations from './loja/mutations'
import	getters	from	'./loja/getters'
import	actions	from	'./loja/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters:	getters,
  actions:actions
})
