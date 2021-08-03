<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 25</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Apakah yang akan anda katakan kepada teman atau keluargamu jika mereka
      tidak mendukung tindakan (perilaku) baru tersebut ?
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : saya akan menanyakan alasan mereka dan mendengarkan, jika sarannya baik saya akan perbaiki prilaku saya."
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
