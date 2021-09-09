<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 16</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Sekarang anda perlu mengingat berbagai pengalaman sebagai bukti bahwa
      pikiran anda tersebut itu tidak nyata atau tidak benar
    </p>
    <p class="font-airbnb-bold text-justify my-2">
      Saya akan membantu Anda dengan mengajukan beberapa pertanyaan
    </p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Apakah ada bukti tambahan dari pengalaman positif yang pernah anda alami
      untuk melawan dan mengubah pikiran negatif tersebut?
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : Gak benar jika saya ceroboh, kan saya sering  membantu pekerjaan rumah dan hasilya semua beres, kamar menjadi bersih, rapi dan cucian piring selesai. Saya bermanfaat."
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
