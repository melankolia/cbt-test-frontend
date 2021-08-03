<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Membaca Pikiran</p>
    <p class="font-airbnb-light mt-2 mb-4 text-left">
      Menyimpulkan bahwa orang lain sedang memikirkan hal-hal negatif tentang
      dirinya padahal belum menemukan fakta yang sebenarnya.
    </p>
    <p class="font-airbnb-light mt-2 mb-4 text-left">
      <span class="font-airbnb-medium">Contoh : </span>Saya berjalan sendirian,
      orang-orang pasti berpikiran bahwa A adalah seorang jomblo dan tidak punya
      teman.
    </p>
    <div class="space-y-2">
      <a-button @click="handleBack" block>
        <span class="font-airbnb">Back</span>
      </a-button>
      <a-button @click="handleSubmit" block type="primary">
        <span class="font-airbnb">Submit</span>
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Button } from "ant-design-vue";

export default {
  components: {
    "a-button": Button,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
  computed: {
    ...mapGetters(["getSecureId"]),
  },
  methods: {
    handleBack() {
      this.$emit("handleBack");
    },
    handleSubmit() {
      this.data.answer = this.getSecureId;
      this.$emit("handleNext");
    },
  },
};
</script>

<style></style>
