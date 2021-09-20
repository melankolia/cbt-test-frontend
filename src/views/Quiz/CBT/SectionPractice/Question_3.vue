<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base mt-2 mb-4">Step 23</p>
    <p class="font-airbnb-medium text-center mt-2 mb-4">
      Apakah ada perilaku lainnya yang bermanfaat yang dapat anda lakukan?
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : saya akan rajin sholat."
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
