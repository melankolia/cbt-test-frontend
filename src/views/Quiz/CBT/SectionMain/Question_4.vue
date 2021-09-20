<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base mt-2 mb-4">Step 12</p>
    <p class="font-airbnb-medium text-justify mt-2 mb-4">
      Sekarang anda perlu mengingat berbagai pengalaman sebagai bukti bahwa
      pikiran anda tersebut itu tidak nyata atau tidak benar
    </p>
    <p class="font-airbnb-medium text-justify my-2">
      Saya akan membantu Anda dengan mengajukan beberapa pertanyaan
    </p>
    <p class="font-airbnb-medium text-justify mt-2 mb-4">
      Apa yang akan anda katakan ke teman dekatmu jika dia berpikir hal negatif
      mengenai dirimu
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : Saya tidak seperti yang kamu pikirkan. Anda keliru menilai diri saya."
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
