import { createStore } from "vuex";

export default createStore({
  state: {
    searchParams: null,
  },
  mutations: {
    setSearchParams: (state, searchParams) => {
      state.searchParams = searchParams;
    },
  },
  actions: {},
  modules: {},
});
