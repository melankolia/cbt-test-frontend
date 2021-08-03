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
          :disabled="loading"
        >
          <span class="font-airbnb">Next</span>
        </a-button>
      </div>
    </div>
    <FootlessModal :visible="visible" title="Result">
      <template #content>
        <div class="text-center">
          <p class="font-airbnb-medium text-lg my-10">
            Apakah masalah anda sekarang sudah mulai dapat teratasi?
          </p>
          <div class="flex flex-row justify-center space-x-2">
            <a-button
              :loading="loadingOk"
              @click="handleOk"
              size="large"
              block
              type="primary"
            >
              Ya
            </a-button>
            <a-button :loading="loadingNo" @click="handleNo" size="large" block>
              Tidak
            </a-button>
          </div>
        </div>
      </template>
    </FootlessModal>
  </div>
</template>

<script>
const FootlessModal = () => import("@/components/Modal/footless");
import { Button } from "ant-design-vue";
import { mapMutations } from "vuex";
import { SET_FINAL_ANSWER } from "@/store/constants/mutations.type";
import { FINAL_SCREEN } from "@/router/name.types";
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
    FootlessModal,
  },
  data() {
    return {
      visible: false,
      loading: false,
      loadingOk: false,
      loadingNo: false,
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
    submitNext() {
      return this.question.no == this.questions.length - 1;
    },
    hideNavigation() {
      return this.question.no == 12;
    },
  },
  methods: {
    ...mapMutations([SET_FINAL_ANSWER]),
    handleNext() {
      if (this.submitNext) {
        this.loading = true;
        return setTimeout(() => {
          this.visible = true;
          this.loading = false;
        }, 1500);
      }
      this.question = this.questions[this.question.no + 1];
    },
    handlePrev() {
      this.question = this.questions[this.question.no - 1];
    },
    handleOk() {
      this.loadingOk = true;
      setTimeout(() => {
        this[SET_FINAL_ANSWER]("YA");
        this.$router.replace({ name: FINAL_SCREEN });
        this.loadingOk = false;
      }, 2000);
    },
    handleNo() {
      this.loadingNo = true;
      setTimeout(() => {
        this[SET_FINAL_ANSWER]("TIDAK");
        this.$router.replace({ name: FINAL_SCREEN });
        this.loadingNo = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.button-back {
  margin: 20px 0 0 20px;
}
</style>
