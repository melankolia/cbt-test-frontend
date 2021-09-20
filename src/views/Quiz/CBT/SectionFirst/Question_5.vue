<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base my-2">Step 5</p>
    <p class="font-airbnb-medium mt-2 mb-4">
      Check list pikiran distorsi (keliru) dibawah ini sesuai dengan isi pikiran
      negatif yang telah anda tuliskan diawal <br />
      (Pemikiran yang keliru)
    </p>
    <div class="text-left border border-gray-300 rounded-xl space-y-2 p-2">
      <div
        v-for="(item, index) in articels"
        :key="index"
        class="
          bg-primary
          rounded-lg
          p-4
          flex flex-row
          items-center
          justify-between
        "
        @click="() => goToDetail(item.secureId)"
      >
        <div class="flex flex-row items-center mr-2">
          <a-icon class="text-white" type="info-circle" />
          <p class="ml-4 font-airbnb-medium text-base text-white m-0">
            {{ item.title }}
          </p>
        </div>
        <a-checkbox :checked="isChecked(index)" />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Checkbox } from "ant-design-vue";
import { mapMutations, mapGetters } from "vuex";
import { SET_QUESTION_SECUREID } from "@/store/constants/mutations.type";

export default {
  components: {
    "a-icon": Icon,
    "a-checkbox": Checkbox,
  },
  props: {
    data: { type: Object, required: true, default: () => {} },
  },
  data() {
    return {
      articels: [
        {
          secureId: "0",
          title: "Membaca Pikiran",
        },
        {
          secureId: "1",
          title: "Generalisasi Berlebihan",
        },
        {
          secureId: "2",
          title: "Catasrophizing",
        },
        {
          secureId: "3",
          title: "Alasan Emosional",
        },
        {
          secureId: "4",
          title: "Black or White Thinking",
        },
        {
          secureId: "5",
          title: "Labeling Pemberian Cap",
        },
        {
          secureId: "6",
          title: "Pernyataan Seharusnya",
        },
        {
          secureId: "7",
          title: "Mental Negative Filter",
        },
        {
          secureId: "8",
          title: "Self Blaming (Menyalahkan Diri Sendiri)",
        },
        {
          secureId: "9",
          title: "Memperbesar pikiran negatif, meminimalkan pikiran positif",
        },
        {
          secureId: "10",
          title: "Ramalan",
        },
        {
          secureId: "11",
          title: "Merasa Selalu Benar",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getAnswerQ5"]),
  },
  methods: {
    ...mapMutations([SET_QUESTION_SECUREID]),
    goToDetail(e) {
      this[SET_QUESTION_SECUREID](e);
      this.$emit("handleNext", "Detail-Q5");
    },
    isChecked(i) {
      return this.getAnswerQ5.some((e) => e == i);
    },
  },
};
</script>

<style></style>
