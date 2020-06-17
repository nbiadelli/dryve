import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carList: [],
    registerCliente: [],
  },
  actions: {
    async actionGetCarList({ commit }) {
      commit("setLoading", true);
      const response = await (
        await fetch("http://www.mocky.io/v2/5eb553df31000060006994a8")
      ).json();
      await commit("setList", response);
      commit("setLoading", false);
      return response;
    },

    async addRegister({ commit }, listRegister) {
      await commit("setClient", listRegister);
      return listRegister;
    },
  },

  mutations: {
    setList(state, payload) {
      state.carList = payload;
    },

    setClient(state, payload) {
      state.registerCliente.push(payload);
    },
  },
});
