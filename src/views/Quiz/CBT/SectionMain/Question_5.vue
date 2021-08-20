<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 13</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Sekarang anda perlu mengingat berbagai pengalaman sebagai bukti bahwa
      pikiran anda tersebut itu tidak nyata atau tidak benar
    </p>
    <p class="font-airbnb-bold text-justify my-2">
      Saya akan membantu Anda dengan mengajukan beberapa pertanyaan
    </p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Apakah ada penjelasan lainnya untuk situasi atau pikiran tersebut?
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : saya merasa pikiran saya benar, karena teman saya juga mengalami hal yang sama, selain itu saya merasa tidak salah, karena saya tidak mengganggunya."
      :auto-size="{ minRows: 6 }"
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
