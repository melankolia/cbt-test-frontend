import MainInstance from "../main.instance";
import {
  ANSIETAS,
  DEPRESI,
  CBT,
  USERS,
  SURVEYS,
  IDENTITIES,
} from "../constants";

const QuizService = {
  createDataAnsietas(data) {
    return MainInstance.post(ANSIETAS, data);
  },
  createDataDepresi(data) {
    return MainInstance.post(DEPRESI, data);
  },
  createDataCBTFirstSection(data) {
    return MainInstance.post(CBT.FIRST_SECTION, data);
  },
  createDataCBTMainSection(data) {
    return MainInstance.post(CBT.MAIN_SECTION, data);
  },
  createDataCBTPracticeSection(data) {
    return MainInstance.post(CBT.PRACTICE_SECTION, data);
  },
  createSurvey(data) {
    return MainInstance.post(SURVEYS, data);
  },
  createIdentities(data) {
    return MainInstance.post(IDENTITIES, data);
  },
  updateStatus(data) {
    return MainInstance.post(USERS.UPDATE_STATUS, data);
  },
};

export default QuizService;
