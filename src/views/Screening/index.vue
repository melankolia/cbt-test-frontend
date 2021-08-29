<template>
  <div>
    <div
      class="min-h-screen px-6 pb-8 pt-24 flex flex-col justify-center"
      v-if="isScreening"
    >
      <div class="bg-white rounded-xl p-6">
        <p class="font-airbnb-medium text-base mb-0 text-center">Screening</p>
        <components :is="isComponents" @handleSubmit="handleSubmit" />
        <a-button
          v-show="isLast"
          type="primary"
          block
          class="mb-2 mt-4"
          :disabled="isFirst"
          @click="handleNext"
          :loading="loading"
        >
          <span class="font-airbnb">Next</span>
        </a-button>
        <a-button block class="mb-2" :disabled="isLast" @click="handlePrev">
          <span class="font-airbnb">Prev</span>
        </a-button>
      </div>
    </div>
    <Sehat v-else-if="isSehat" />
    <GangguanPsikotik v-else-if="isGangguan" />
    <MasalahPsikososial v-else-if="isPsikososial" />
  </div>
</template>

<script>
const ScreeningCover = () => import("@/views/Screening/cover");
const Question = () => import("@/views/Screening/question");
const Sehat = () => import("@/views/Screening/Result/Sehat");
const GangguanPsikotik = () =>
  import("@/views/Screening/Result/GangguanPsikotik");
const MasalahPsikososial = () =>
  import("@/views/Screening/Result/MasalahPsikososial");
import { Button } from "ant-design-vue";

export default {
  components: {
    ScreeningCover,
    Question,
    Sehat,
    GangguanPsikotik,
    MasalahPsikososial,
    "a-button": Button,
  },
  data() {
    return {
      isComponents: "ScreeningCover",
      isResult: "screening",
      loading: false,
    };
  },
  computed: {
    isFirst() {
      return this.isComponents == "Question";
    },
    isLast() {
      return this.isComponents == "ScreeningCover";
    },
    isScreening() {
      return this.isResult == "screening";
    },
    isSehat() {
      return this.isResult == "sehat";
    },
    isGangguan() {
      return this.isResult == "gangguan psikotik";
    },
    isPsikososial() {
      return this.isResult == "psikososial";
    },
  },
  methods: {
    handleNext() {
      this.loading = true;
      setTimeout(() => {
        this.isComponents = "Question";
        this.loading = false;
      }, 3000);
    },
    handlePrev() {
      this.isComponents = "ScreeningCover";
    },
    handleSubmit(e) {
      this.isResult = e;
    },
  },
};
</script>

<style scoped>
ul > li {
  margin-bottom: 12px;
}
</style>
