import MainInstance from "../main.instance";
import { DEPRESI } from "../constants";

const QuizService = {
  createDataAnsietas(data) {
    return MainInstance.post(DEPRESI, data);
  },
};

export default QuizService;
