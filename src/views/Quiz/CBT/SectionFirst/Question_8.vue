<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base my-2">Step 8</p>
    <p class="font-airbnb-medium mt-2 mb-4">
      Apa yg anda lakukan ketika pikiran negatifmu muncul? <br />
      (Prilaku)
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : saya lebih senang menyendiri dirumah"
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
