<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base my-2">Step 10</p>
    <p class="font-airbnb-medium mt-2 mb-4">
      Apa pikiran negatif yang telah disebutkan di step awal tadi yang paling
      sering menggangu perasaanmu?
    </p>
    <div class="my-10">
      <a-radio-group
        v-model="data.answer"
        button-style="solid"
        style="width: 100%"
      >
        <a-radio-button
          v-for="(choice, i) in choices"
          :style="radioStyle"
          :value="choice"
          :key="i"
          size="large"
          style="height: 40px"
          class="rounded"
        >
          {{ choice }}
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
import { Radio } from "ant-design-vue";
import { mapMutations } from "vuex";
import { SET_STEP_10 } from "@/store/constants/mutations.type";

export default {
  components: {
    "a-radio-group": Radio.Group,
    "a-radio-button": Radio.Button,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
    questions: { type: Array, required: true, default: () => {} },
  },
  data() {
    return {
      answer: "",
      choices: [],
      radioStyle: {
        display: "block",
      },
    };
  },
  mounted() {
    let answer = this.questions.filter((e) => e.no >= 1 && e.no <= 2);
    answer.forEach((e) => this.choices.push(...e.answer));
  },
  methods: {
    ...mapMutations([SET_STEP_10]),
    settingUpStep10(params) {
      this[SET_STEP_10](params);
    },
  },
  watch: {
    "data.answer": {
      handler(val) {
        val && this.settingUpStep10(val);
      },
      deep: true,
    },
  },
};
</script>

<style></style>
