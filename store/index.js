import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/RestService';

Vue.use(Vuex)

const createStore= () => new Vuex.Store({
    state: () => ({
      nurses: [],
      active_nurse: {}
    }),
    mutations: {
      SET_NURSES: (state, data) => {
        Vue.set(state, 'nurses', data)
      },
      SET_ACTIVE_NURSE: (state, data) => {
        Vue.set(state, 'active_nurse', data)
      }
    },
    getters: {
      nurses: (state) => {
        return state.nurses;
      }
    },
    actions: {
      getNurses: ({commit}) => {
        return new Promise((resolve, reject) => {
          api.get('nurses')
            .then(res => {
              commit("SET_NURSES", res.data);
              resolve();
            })
            .catch(err => {
              console.log(err);
              reject(err);
            })
        })
      }
    }
})

export default createStore