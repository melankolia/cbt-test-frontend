import { initialUserState } from "../states";
import { LOGIN } from "../constants/actions.type";
import { SET_USER, RESET_USER } from "../constants/mutations.type";
import AuthService from "@/services/resources/auth.service";

const state = {
  user: initialUserState(),
};

const getters = {
  getUser(state) {
    return state.user;
  },
};

const mutations = {
  [SET_USER](state, payload) {
    state.user = { ...payload };
  },
  [RESET_USER](state) {
    Object.assign(state.user, initialUserState());
  },
};

const actions = {
  [LOGIN](context, payload) {
    return new Promise((resolve, reject) => {
      AuthService.login(payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            context.commit(SET_USER, result);
            resolve({ result, message });
          } else {
            reject({ result, message });
          }
        })
        .catch((err) => {
          console.log("DISINI");
          reject(err);
        });
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
