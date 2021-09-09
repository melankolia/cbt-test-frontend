<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 17</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Coba bandingkan bukti yang mendukung pikiran negatifmu dengan bukti yang
      menentang pikiran negatifmu? <br />
      Apa kesimpulanmu?
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : pikiran yang diawal tadi gak benar karena ternyata dia sebenarnya baik. Dia seperti itu mungkin dia ada masalah. Saya kadang bertindak hati hati dalam bekerja. Saya bisa menyelesaikan pekerjaan saya"
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
