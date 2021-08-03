import { intialQuestionState } from "../states";
import {
  SET_QUESTION_SECUREID,
  RESET_QUESTION_STATE,
} from "../constants/mutations.type";

const state = {
  question: intialQuestionState(),
};

const getters = {
  getSecureId(state) {
    return state.question.secureId;
  },
};

const mutations = {
  [RESET_QUESTION_STATE](state) {
    Object.assign(state.question, intialQuestionState());
  },
  [SET_QUESTION_SECUREID](state, payload) {
    state.question.secureId = payload;
  },
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
