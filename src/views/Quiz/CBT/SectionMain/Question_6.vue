<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base mt-2 mb-4">Step 14</p>
    <p class="font-airbnb-medium text-justify mt-2 mb-4">
      Sekarang anda perlu mengingat berbagai pengalaman sebagai bukti bahwa
      pikiran anda tersebut itu tidak nyata atau tidak benar
    </p>
    <p class="font-airbnb-medium text-justify my-2">
      Saya akan membantu Anda dengan mengajukan beberapa pertanyaan
    </p>
    <p class="font-airbnb-medium text-justify mt-2 mb-4">
      Apa yang akan dikatakan teman dekatmu ketika anda tidak bisa menemukan
      bukti untuk melawan atau mengubah pikiran negatif yang muncul tersebut?
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : Saya yakin saya bisa berubah. Saya bisa minta pendapat dari pengalaman teman teman yang pernah berinteraksi dengan saya."
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
