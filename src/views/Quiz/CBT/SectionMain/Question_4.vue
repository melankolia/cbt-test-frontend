<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 12</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Sekarang anda perlu mengingat berbagai pengalaman sebagai bukti bahwa
      pikiran anda tersebut itu tidak nyata atau tidak benar
    </p>
    <p class="font-airbnb-bold text-justify my-2">
      Saya akan membantu Anda dengan mengajukan beberapa pertanyaan
    </p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Apa yang akan anda katakan ke teman dekatmu jika dia berpikir hal negatif
      yang sama denganmu
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : saya senasib dengan dirimu, berarti dia memang benci sama saya dan kamu"
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
