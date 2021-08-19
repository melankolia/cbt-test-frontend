import MainInstance from "../main.instance";
import { DEPRESI, CBT } from "../constants";

const QuizService = {
  createDataAnsietas(data) {
    return MainInstance.post(DEPRESI, data);
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
};

export default QuizService;
