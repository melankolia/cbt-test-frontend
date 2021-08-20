import MainInstance from "../main.instance";
import { USERS } from "../constants";

const MainService = {
  login(data) {
    return MainInstance.post(USERS.LOGIN, data);
  },
  register(data) {
    return MainInstance.post(USERS.REGISTER, data);
  },
};

export default MainService;
