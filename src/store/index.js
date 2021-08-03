import Vue from "vue";
import Vuex from "vuex";
import Question from "./modules/question.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Question,
  },
  plugins: [],
});
