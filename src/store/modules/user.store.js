import { initialUserState } from "../states";
import { LOGIN, FORCE_LOGOUT } from "../constants/actions.type";
import { SET_USER, RESET_USER } from "../constants/mutations.type";
import AuthService from "@/services/resources/auth.service";

const state = {
  user: initialUserState(),
};

const getters = {
  getUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.user.isAuthenticated;
  },
};

const mutations = {
  [SET_USER](state, payload) {
    state.user = { ...payload, isAuthenticated: true };
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
          reject(err);
        });
    });
  },
  [FORCE_LOGOUT](context) {
    context.commit(RESET_USER);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
