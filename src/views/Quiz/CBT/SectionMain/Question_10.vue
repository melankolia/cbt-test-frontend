<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base mt-2 mb-4">Step 18</p>
    <p class="font-airbnb-medium text-justify mt-2 mb-4">
      Lihat kembali Latihan CBT yang sudah dikerjakan. Tuliskan dan ucapkan
      dengan lantang pikiran positif untuk menggantikan pikiran negatif
      tersebut.
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : Saya adalah orang yang bermanfaat bagi keluarga. Saya dapat membantu pekerjaan rumah tangga. Saya bisa belajar berpikir positif ke orang lain."
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
