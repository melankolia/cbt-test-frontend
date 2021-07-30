<template>
  <div>
    <a-button
      class="button-back"
      shape="circle"
      icon="left"
      @click="handleBack"
    />
    <div class="min-h-screen px-6 pt-20 pb-8 flex flex-col">
      <div class="bg-white rounded-xl p-6">
        <p class="font-airbnb-medium text-base mb-0 text-center">
          Latihan Awal CBT
        </p>
        <components :is="question.component" :data="question" />
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
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
import { MAIN_PAGE } from "@/router/name.types";
import { Question_1, Question_2, Question_3 } from "./Questions";

export default {
  components: {
    "a-button": Button,
    Question_1,
    Question_2,
    Question_3,
  },
  data() {
    return {
      loading: false,
      loadingOk: false,
      visible: false,
      question: {
        no: 0,
        component: Question_1,
        answer: "",
      },
      questions: [
        {
          no: 0,
          component: Question_1,
          answer: "",
        },
        {
          no: 1,
          component: Question_2,
          answer: "",
        },
        {
          no: 2,
          component: Question_3,
          answer: "",
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
  },
  methods: {
    handleBack() {
      this.$router.replace({ name: MAIN_PAGE });
    },
    handlePrev() {
      this.question = this.questions[this.question.no - 1];
    },
    handleNext() {
      this.question = this.questions[this.question.no + 1];
    },
  },
};
</script>

<style scoped>
.button-back {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
