<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Step 1</p>
    <p class="font-airbnb-bold text-base my-2">Bagaimana situasinya?</p>
    <p class="font-airbnb-light mt-2 mb-4">
      “Tuliskan situasi (keadaan) yang menyebabkan anda sering berpikir negatif
      atau mempunyai perasaan negatif?"
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh: Saya sedang jalan-jalan lalu bertemu tetangga, saya menegurnya tapi saya malah diabaikan"
      :auto-size="{ minRows: 4 }"
    />
  </div>
</template>

<script>
import { Input } from "ant-design-vue";

export default {
  components: {
    "a-textarea": Input.TextArea,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
};
</script>

<style></style>
