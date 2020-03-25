import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    news : [],
    jobs : [],
    ask : [],
    user : {},
    item : {},
    list : [],
  },
  getters : {
    fechedItem(state){
      return state.item;
    }
  },
  mutations,
  actions,
})