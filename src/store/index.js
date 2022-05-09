import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from "./info";
import category from "./category"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER;

      const myHeaders = new Headers();
      myHeaders.append("apikey", `${key}`);
    
      const response = await fetch("https://api.apilayer.com/fixer/latest?symbols=USD,EUR,RUB", {
        method: "GET",
        redirect: "follow",
        headers: myHeaders
      });

      return await response.json();
    },
  },
  getters: {
    error: (state) => state.error,
  },
  modules: {
    auth,
    info,
    category
  },
});
