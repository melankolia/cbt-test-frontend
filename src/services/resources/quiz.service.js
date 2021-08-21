import MainInstance from "../main.instance";
import { ANSIETAS, DEPRESI, CBT } from "../constants";

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
};

export default QuizService;
