<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base my-2">Step 2</p>
    <p class="font-airbnb-medium mt-2 mb-4">
      Apa yang anda pikirkan mengenai kejadian itu?
    </p>
    <a-textarea
      v-model="answer"
      placeholder="Contoh : Dia tidak mau menyapa saya karena dia benci saya"
      :auto-size="{ minRows: 4 }"
      class="mb-4"
    />
    <div class="mb-4"></div>
    <a-button @click="handlePrev" block class="mb-2">
      <span class="font-airbnb">Prev</span>
    </a-button>
    <a-button :disabled="disabledNext" @click="handleNext" block type="primary">
      <span class="font-airbnb">Next</span>
    </a-button>
  </div>
</template>

<script>
import { Input, Button } from "ant-design-vue";

export default {
  components: {
    "a-textarea": Input.TextArea,
    "a-button": Button,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
  data() {
    return {
      answer: "",
    };
  },
  methods: {
    handlePrev() {
      this.$emit("handleBack");
    },
    handleNext() {
      this.data.answer.push(this.answer);
      this.$emit("handleNext");
    },
  },
  computed: {
    disabledNext() {
      return !this.answer;
    },
  },
};
</script>

<style></style>
