import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carList: [],
    loading: false,
    filter: ""
  },
  mutations: {
    setList(state, payload) {
      state.carList = payload
    },

    setFilter(state, payload) {
      state.filter = payload;
      console.log("Pegouuuuuuuu", state.filter)
    },

    setLoading(state, payload) {
      state.loading = payload
    },
  },

  actions: {
    async actionGetCarList({ commit }) {
      commit("setLoading", true)
      const response = await (await fetch('http://www.mocky.io/v2/5eb553df31000060006994a8')).json();
      await commit("setList", response)
      commit("setLoading", false)
      return response;
    }
  },


});
