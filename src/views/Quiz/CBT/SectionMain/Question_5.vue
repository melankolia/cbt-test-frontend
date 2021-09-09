<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 13</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Sekarang anda perlu mengingat berbagai pengalaman sebagai bukti bahwa
      pikiran anda tersebut itu tidak nyata atau tidak benar
    </p>
    <p class="font-airbnb-bold text-justify my-2">
      Saya akan membantu Anda dengan mengajukan beberapa pertanyaan
    </p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Apakah ada penjelasan lainnya untuk situasi atau pikiran tersebut?
      {{ getStep11 }}
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : Saat itu saya sedang terburu buru pulang dari pasar. Saya melihat dirinya dengan jarak yg berjauhan diseberang jalan. Mungkin dia tidak melihat saya"
      :auto-size="{ minRows: 6 }"
    />
  </div>
</template>

<script>
import { Input } from "ant-design-vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "a-textarea": Input.TextArea,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
  computed: {
    ...mapGetters(["getStep11"]),
  },
};
</script>

<style></style>
