<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 22</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Apa alasan mu melakukan tindakan (perilaku) tersebut?
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : karena membuat diri saya bahagia dan berguna."
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
