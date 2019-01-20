import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/RestService';

Vue.use(Vuex)

const createStore= () => new Vuex.Store({
    state: () => ({
      nurses: [],
      activeNurse: {}
    }),
    mutations: {
      SET_NURSES: (state, data) => {
        Vue.set(state, 'nurses', data)
      },
      SET_ACTIVE_NURSE: (state, data) => {
        Vue.set(state, 'activeNurse', data)
      }
    },
    getters: {
      nurses: (state) => {
        return state.nurses;
      },
      activeNurse: (state) => {
        return state.activeNurse;
      }
    },
    actions: {
      getNurses: function({commit}) {
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
      },
      getNurse: ({commit}, id) => {
        return new Promise((resolve, reject) => {
          api.get('nurses/' + id)
            .then(res => {
              commit("SET_ACTIVE_NURSE", JSON.parse(res.data.body));
              resolve();
            })
            .catch(err => {
              reject(err);
            })
        })
      },
    }
})

export default createStore