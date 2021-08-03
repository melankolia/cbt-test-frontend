<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Step 5</p>
    <p class="font-airbnb-light mt-2 mb-4">
      Jenis Distorsi Pikiran <br />
      (Pemikiran yang keliru)
    </p>
    <div class="text-left border border-gray-300 rounded-xl space-y-2 p-2">
      <div
        v-for="(item, index) in articels"
        :key="index"
        class="
          bg-primary
          active:bg-white
          rounded-lg
          p-4
          flex flex-row
          items-center
        "
        @click="() => goToDetail(item.secureId)"
      >
        <a-icon class="text-white" type="info-circle" />
        <p class="ml-4 font-airbnb-medium text-base text-white m-0">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
import { mapMutations } from "vuex";
import { SET_QUESTION_SECUREID } from "@/store/constants/mutations.type";

export default {
  components: {
    "a-icon": Icon,
  },
  data() {
    return {
      articels: [
        {
          secureId: "1",
          title: "Membaca Pikiran",
        },
        {
          secureId: "2",
          title: "Generalisasi Belebihan",
        },
        {
          secureId: "3",
          title: "Catasrophizing",
        },
        {
          secureId: "4",
          title: "Alasan Emosional",
        },
        {
          secureId: "5",
          title: "Black or White Thinking",
        },
        {
          secureId: "6",
          title: "Labeling Pemberian Cap",
        },
        {
          secureId: "7",
          title: "Pernyataan Seharusnya",
        },
        {
          secureId: "8",
          title: "Mental Negative Filter",
        },
        {
          secureId: "9",
          title: "Self Blaming (Menyalahkan Diri Sendiri)",
        },
        {
          secureId: "10",
          title: "Memperbesar pikiran negatif, meminimalkan pikiran negatif",
        },
        {
          secureId: "11",
          title: "Ramalan",
        },
        {
          secureId: "12",
          title: "Merasa Selalu Benar",
        },
      ],
    };
  },
  methods: {
    ...mapMutations([SET_QUESTION_SECUREID]),
    goToDetail(e) {
      this[SET_QUESTION_SECUREID](e);
      this.$emit("handleNext", "Detail-Q5");
    },
  },
};
</script>

<style></style>
