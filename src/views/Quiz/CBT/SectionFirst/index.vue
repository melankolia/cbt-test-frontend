<template>
  <div>
    <a-button
      class="button-back"
      shape="circle"
      icon="left"
      @click="handleBack"
    />
    <div class="min-h-screen px-6 pt-16 pb-8 flex flex-col">
      <div class="bg-white rounded-xl p-6">
        <p class="font-airbnb-medium text-base mb-0 text-center">
          Latihan Awal CBT
        </p>
        <components
          :is="question.component"
          :data="questions[question.no]"
          :questions="questions"
          @handlePop="handlePop"
          @handleNext="(e) => handleNext(e)"
          @handleBack="handlePrev"
        />
        <template v-if="!hideNavigation">
          <a-button
            @click="handlePrev"
            block
            :loading="loading"
            :disabled="disabledPrev"
            class="mb-2"
          >
            <span class="font-airbnb">Prev</span>
          </a-button>
          <a-button
            @click="handleNext"
            block
            type="primary"
            :loading="loading"
            :disabled="disabledNext"
          >
            <span class="font-airbnb">Next</span>
          </a-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Button } from "ant-design-vue";
import { MAIN_PAGE } from "@/router/name.types";
import {
  Prolog,
  Question_1,
  Question_2,
  Question_3,
  Question_4,
  Question_5,
  Question_5_Detail,
  Question_6,
  Question_7,
  Question_8,
  Question_9,
  Question_10,
  Result,
} from "./Questions";
import {
  RESET_ANSWER_Q5,
  RESET_NEEDED_ANSWER,
} from "@/store/constants/mutations.type";

export default {
  components: {
    "a-button": Button,
    Prolog,
    Question_1,
    Question_2,
    Question_3,
    Question_4,
    Question_5,
    Question_5_Detail,
    Question_6,
    Question_7,
    Question_8,
    Question_9,
    Question_10,
    Result,
  },
  data() {
    return {
      loading: false,
      question: {
        no: 0,
        title: "Prolog",
        component: Prolog,
        answer: "",
      },
      questions: [
        {
          no: 0,
          title: "Prolog",
          component: Prolog,
          answer: "",
        },
        {
          no: 1,
          title: "Situasi",
          component: Question_1,
          answer: "",
        },
        {
          no: 2,
          title: "Pikiran",
          component: Question_2,
          answer: [],
        },
        {
          no: 3,
          title: "Pikiran",
          component: Question_3,
          answer: [],
        },
        {
          no: 4,
          component: Question_4,
          answer: "",
        },
        {
          no: 5,
          title: "Jenis Distorsi Pikiran",
          component: Question_5,
          answer: [],
        },
        {
          no: 6,
          component: Question_5_Detail,
          answer: [],
        },
        {
          no: 7,
          title: "Perasaan",
          component: Question_6,
          answer: "",
        },
        {
          no: 8,
          title: "Tingkatan Perasaan",
          component: Question_7,
          answer: 5.0,
        },
        {
          no: 9,
          title: "Perilaku",
          component: Question_8,
          answer: "",
        },
        {
          no: 10,
          title: "Konsekuensi",
          component: Question_9,
          answer: "",
        },
        {
          no: 11,
          title: "Pikiran yang paling sering mengganggu perasaan",
          component: Question_10,
          answer: "",
        },
        {
          no: 12,
          component: Result,
        },
      ],
    };
  },
  computed: {
    disabledPrev() {
      return this.question.no === 0;
    },
    disabledNext() {
      return this.question.no == this.questions.length - 1;
    },
    hideNavigation() {
      return (
        this.question.no == 2 ||
        this.question.no == 3 ||
        this.question.no == 6 ||
        this.question.no == 12
      );
    },
  },
  methods: {
    ...mapMutations([RESET_ANSWER_Q5, RESET_NEEDED_ANSWER]),
    handleBack() {
      this.$router.replace({ name: MAIN_PAGE });
    },
    handlePrev() {
      this.question = this.questions[this.question.no - 1];
    },
    handleNext(e) {
      if (e !== "Detail-Q5" && this.question.no == 5) {
        return (this.question = this.questions[this.question.no + 2]);
      }
      this.question = this.questions[this.question.no + 1];
    },
    handlePop() {
      this.question = this.questions[2];
    },
  },
  mounted() {
    this[RESET_ANSWER_Q5]();
    this[RESET_NEEDED_ANSWER]();
  },
};
</script>

<style scoped>
.button-back {
  margin: 20px 0 0 20px;
}
</style>
