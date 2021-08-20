import {
  intialQuestionState,
  initialDistortionState,
  initialAnswerQ5,
} from "../states";
import {
  SET_QUESTION_SECUREID,
  SET_FINAL_ANSWER,
  RESET_QUESTION_STATE,
  RESET_ANSWER_Q5,
  SET_ANSWER_Q5,
} from "../constants/mutations.type";

const state = {
  question: intialQuestionState(),
  distortion: initialDistortionState(),
  answerQ5: initialAnswerQ5(),
};

const getters = {
  getSecureId(state) {
    return state.question.secureId;
  },
  getFinalAnswer(state) {
    return state.question.finalAnswer;
  },
  getDetail:
    (state) =>
    (id = 0) => {
      return state.distortion.detail[id];
    },
  getAnswerQ5(state) {
    return state.answerQ5.answer;
  },
  getDistortions(state) {
    return state.distortion;
  },
};

const mutations = {
  [RESET_QUESTION_STATE](state) {
    Object.assign(state.question, intialQuestionState());
  },
  [RESET_ANSWER_Q5](state) {
    Object.assign(state.answerQ5, initialAnswerQ5());
  },
  [SET_ANSWER_Q5](state, payload) {
    if (
      payload.type &&
      !state.answerQ5.answer.find((e) => e == payload.answer)
    ) {
      state.answerQ5.answer.push(payload.answer);
    } else {
      state.answerQ5.answer = state.answerQ5.answer.filter(
        (e) => e != payload.answer
      );
    }
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
