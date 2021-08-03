<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Step 9</p>
    <p class="font-airbnb-light mt-2 mb-4">
      Apa konsekuensi dari pikiran, perasaan dan perilakumu tersebut?
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : saya lebih nyaman dan aman didalam rumah dan orang lain tidak akan memarahi saya"
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
