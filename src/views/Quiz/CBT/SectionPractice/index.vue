<template>
  <div>
    <a-button
      class="button-back"
      shape="circle"
      icon="left"
      @click="$router.back()"
    />
    <div class="min-h-screen px-6 pt-20 pb-8 flex flex-col">
      <div class="bg-white rounded-xl p-6">
        <p class="font-airbnb-medium text-base mb-0 text-center">
          Latihan Inti CBT
        </p>
        <components
          :is="question.component"
          :data="questions[question.no]"
          :questions="questions"
          @handleNext="(e) => handleNext(e)"
          @handleBack="handlePrev"
        />
        <a-button
          v-if="!hideNavigation"
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
import {
  Question_1,
  Question_2,
  Question_3,
  Question_4,
  Question_5,
  Question_6,
} from "./Questions";

export default {
  components: {
    "a-button": Button,
    Question_1,
    Question_2,
    Question_3,
    Question_4,
    Question_5,
    Question_6,
  },
  data() {
    return {
      loading: false,
      question: {
        no: 0,
        component: Question_1,
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
        {
          no: 3,
          component: Question_4,
          answer: "",
        },
        {
          no: 4,
          component: Question_5,
          answer: "",
        },
        {
          no: 5,
          component: Question_6,
          answer: "",
        },
      ],
    };
  },
  computed: {
    disabledNext() {
      return this.question.no == this.questions.length - 1;
    },
    hideNavigation() {
      return this.question.no == 12;
    },
  },
  methods: {
    handleNext() {
      this.question = this.questions[this.question.no + 1];
    },
    handlePrev() {
      this.question = this.questions[this.question.no - 1];
    },
  },
};
</script>

<style scoped>
.button-back {
  margin: 20px 0 0 20px;
}
</style>
