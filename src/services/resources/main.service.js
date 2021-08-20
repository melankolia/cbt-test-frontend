import MainInstance from "../main.instance";
import { USERS } from "../constants";

const MainService = {
  getList(params) {
    return MainInstance.query(USERS.BROWSE, { params });
  },
  getDetail(id) {
    return MainInstance.fetch(USERS.BROWSE, id);
  },
};

export default MainService;
