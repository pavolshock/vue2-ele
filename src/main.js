// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import axios from 'axios'
import './common/stylus/index.styl'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
var store = new Vuex.Store({

})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
