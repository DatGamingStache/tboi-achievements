import { createStore } from "vuex";

export default createStore({
  state: {
    config: {
      webKey: "",
      steamId: "",
      steamAppId: "",
    },
  },
  mutations: {
    setConfig(state, payload) {
      state.config.webKey = payload.WebKey;
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
