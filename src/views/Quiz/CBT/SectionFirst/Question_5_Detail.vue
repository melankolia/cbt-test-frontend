<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">{{ title }}</p>
    <p class="font-airbnb-light mt-2 mb-4 text-left">
      {{ description }}
    </p>
    <p class="font-airbnb-light mt-2 mb-4 text-left">
      <span class="font-airbnb-medium">Contoh : </span>
      {{ example }}
    </p>
    <div class="space-y-4 text-left">
      <div
        class="flex flex-row items-center p-3 mt-8 rounded-xl"
        style="background-color: #d6efff"
      >
        <a-checkbox :checked="isChecked" @change="onChange">
          <span class="font-airbnb-medium">
            Ya, ini sesuai dengan isi pikiran yang telah saya tulis
          </span>
        </a-checkbox>
      </div>
      <a-button @click="handleBack" block>
        <span class="font-airbnb">Back</span>
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Button, Checkbox } from "ant-design-vue";
import { SET_ANSWER_Q5 } from "@/store/constants/mutations.type";

export default {
  components: {
    "a-button": Button,
    "a-checkbox": Checkbox,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
  computed: {
    ...mapGetters(["getSecureId", "getDetail", "getAnswerQ5"]),
    description() {
      return this.getDetail(this.getSecureId).desc;
    },
    example() {
      return this.getDetail(this.getSecureId).example;
    },
    title() {
      return this.getDetail(this.getSecureId).title;
    },
    isChecked() {
      return this.getAnswerQ5.some((e) => e == this.getSecureId);
    },
  },
  methods: {
    ...mapMutations([SET_ANSWER_Q5]),
    handleBack() {
      this.$emit("handleBack");
    },
    onChange(e) {
      this[SET_ANSWER_Q5]({
        type: e.target,
        answer: this.getSecureId,
      });
    },
  },
};
</script>

<style></style>
