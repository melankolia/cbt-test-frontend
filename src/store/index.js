import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import Question from "./modules/question.store";
import User from "./modules/user.store";

Vue.use(Vuex);

const debug = process.env.VUE_APP_DEBUG;
const debugPlugin = debug == "true" ? [createLogger()] : [];

export default new Vuex.Store({
  modules: {
    User,
    Question,
  },
  plugins: [...debugPlugin],
});
