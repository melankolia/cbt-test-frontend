import MainInstance from "../main.instance";
import { HOME } from "../constants";

const MainService = {
  getList(params) {
    return MainInstance.query(HOME, { params });
  },
};

export default MainService;
