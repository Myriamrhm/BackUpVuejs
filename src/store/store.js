import Vue from 'vue'
import Vuex from 'vuex'
import users from "./users"
Vue.use(Vuex)
// console.log("--------->", users)
export default new Vuex.Store({
  modules: {
    users
  }
})
