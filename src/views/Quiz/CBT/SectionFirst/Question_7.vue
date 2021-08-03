<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Step 7</p>
    <p class="font-airbnb-light mt-2 mb-4">
      Berapa tingkatan perasaan malu anda alami ?
    </p>
    <div class="my-10">
      <a-slider
        v-model="data.answer"
        :max="10"
        :min="0"
        :step="0.1"
        :default-value="5.0"
        :tooltip-visible="true"
      />
    </div>
  </div>
</template>

<script>
import { Slider } from "ant-design-vue";

export default {
  components: {
    "a-slider": Slider,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
};
</script>

<style></style>
