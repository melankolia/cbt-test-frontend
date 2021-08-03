<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 26</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Apakah anda bersedia menguatkan kembali pikiran positif dan memelihara
      perasaan bahagia sebelumnya?Tuliskan alasan pikiran positifmu!
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : Ya saya bersedia karena saya mengetahui apa yang terbaik buat diri saya yaitu menjadi orang yang ramah, bermanfaat dan berguna buat orang lain."
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
