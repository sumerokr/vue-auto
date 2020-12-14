import { createStore } from "vuex";
import { mutationTypes } from "./types";

export default createStore({
  state: {
    cars: [],
  },
  mutations: {
    [mutationTypes.setCars]: (state, cars) => {
      state.cars = cars;
    },
  },
  actions: {},
  modules: {},
});
