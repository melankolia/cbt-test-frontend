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
import { Button } from "ant-design-vue";
import {
  Question_1,
  Question_2,
  Question_3,
  Question_4,
  Question_5,
  Question_6,
  Question_7,
  Question_8,
  Question_9,
  Question_10,
  Question_11,
  Question_12,
  Result,
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
    Question_7,
    Question_8,
    Question_9,
    Question_10,
    Question_11,
    Question_12,
    Result,
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
        },
        {
          no: 1,
          component: Question_2,
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
        {
          no: 6,
          component: Question_7,
          answer: "",
        },
        {
          no: 7,
          component: Question_8,
          answer: "",
        },
        {
          no: 8,
          component: Question_9,
          answer: "",
        },
        {
          no: 9,
          component: Question_10,
          answer: "",
        },
        {
          no: 10,
          component: Question_11,
          answer: "",
        },
        {
          no: 11,
          component: Question_12,
          answer: 5.0,
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
