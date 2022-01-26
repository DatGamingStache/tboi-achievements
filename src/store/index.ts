import { createStore } from "vuex";

export default createStore({
  state: {
    config: {
      webKey: "BB3A97B18B1936E63E6EC7CA90660C8E",
      steamId: "76561198065217620",
      steamAppId: "250900",
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
