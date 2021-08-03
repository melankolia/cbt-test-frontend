import { intialQuestionState } from "../states";
import {
  SET_QUESTION_SECUREID,
  SET_FINAL_ANSWER,
  RESET_QUESTION_STATE,
} from "../constants/mutations.type";

const state = {
  question: intialQuestionState(),
};

const getters = {
  getSecureId(state) {
    return state.question.secureId;
  },
  getFinalAnswer(state) {
    return state.question.finalAnswer;
  },
};

const mutations = {
  [RESET_QUESTION_STATE](state) {
    Object.assign(state.question, intialQuestionState());
  },
  [SET_QUESTION_SECUREID](state, payload) {
    state.question.secureId = payload;
  },
  [SET_FINAL_ANSWER](state, payload) {
    state.question.finalAnswer = payload;
  },
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
