import { createStore } from "vuex";

export default createStore({
  state: {
    config: {
      WebKey: "",
      steamId: "",
      steamAppId: "",
    },
  },
  mutations: {
    setConfig(state, payload) {
      state.config.WebKey = payload.WebKey;
      state.config.steamId = payload.steamId;
      state.config.steamAppId = payload.steamAppId;
    },
  },
  getters: {
    getConfig: (state) => {
      return state.config;
    },
  },
  actions: {},
  modules: {},
});
