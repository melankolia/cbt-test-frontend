<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Step 6</p>
    <p class="font-airbnb-light mt-2 mb-4">
      Bagaimana Perasaanmu ketika kamu berpikir negatif tersebut
    </p>
    <div class="flex flex-row space-x-8 my-10">
      <a-radio-group
        v-model="data.answer"
        default-value="Marah"
        button-style="solid"
      >
        <a-radio-button value="Marah"> Marah </a-radio-button>
        <a-radio-button value="Cemas"> Cemas </a-radio-button>
        <a-radio-button value="Bahagia"> Bahagia </a-radio-button>
        <a-radio-button value="Sedih"> Sedih </a-radio-button>
        <a-radio-button value="Malu"> Malu </a-radio-button>
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
  },
};
</script>

<style></style>
