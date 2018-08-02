import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seller: {}
  },
  mutations: {
    getseller (state,Obj){
      /*var Obj = JSON.stringify(Obj)*/
     /* console.log(Obj)*/
      // 变更状态
      state.seller = Obj;
    }
  },
  actions: {}
})
