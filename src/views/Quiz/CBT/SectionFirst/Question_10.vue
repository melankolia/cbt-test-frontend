<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Step 10</p>
    <p class="font-airbnb-light mt-2 mb-4">
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
};
</script>

<style></style>
