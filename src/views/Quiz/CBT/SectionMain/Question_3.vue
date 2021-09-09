<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base mt-2 mb-4">Step 11</p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Pikiran anda tersebut bisa jadi merupakan pikiran yang anda yakini ada
      atau benar namun sebenarnya pikiran itu tidak ada atau keliru. Oleh karena
      itu anda perlu mulai mencari bukti yang dapat melawan pikiran negatif Anda
      tersebut. Akhirnya Anda menarik kesimpulan dan merumuskan pikiran baru
      (alternatif)
    </p>
    <p class="font-airbnb-light text-justify mt-2 mb-4">
      Sekarang anda perlu mengingat berbagai pengalaman yang anda alami sebagai
      bukti yang menguatkan dan sebagai bukti yang mampu mengalahkan pikiran
      negative yang muncul
    </p>
    <p class="font-airbnb-bold text-justify my-2">
      Bukti atau pengalaman apa yang mendukung seringnya muncul pikiran
      negatifmu? {{ getStep10 }}
    </p>
    <a-textarea
      v-model="data.answer"
      placeholder="Contoh : Setiap berpapasan dengannya, dia selalu menghindar"
      :auto-size="{ minRows: 6 }"
    />
  </div>
</template>

<script>
import { Input } from "ant-design-vue";
import { mapGetters, mapMutations } from "vuex";
import { SET_STEP_11 } from "@/store/constants/mutations.type";

export default {
  components: {
    "a-textarea": Input.TextArea,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
  computed: {
    ...mapGetters(["getStep10"]),
  },
  methods: {
    ...mapMutations([SET_STEP_11]),
    settingUpStep11(params) {
      this[SET_STEP_11](params);
    },
  },
  watch: {
    "data.answer": {
      handler(val) {
        val && this.settingUpStep11(val);
      },
      deep: true,
    },
  },
};
</script>

<style></style>
