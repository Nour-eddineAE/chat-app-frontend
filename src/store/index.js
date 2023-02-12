import { createStore } from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import VuexPersistence from "vuex-persist";

// state persistance
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
  plugins: [vuexLocal.plugin],
});
