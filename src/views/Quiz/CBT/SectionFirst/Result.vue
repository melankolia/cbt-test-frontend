<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Result</p>
    <div class="text-left border border-gray-300 rounded-xl space-y-2 p-2 mb-4">
      <p class="font-airbnb-medium">Situasi</p>
      <p class="mt-0 text-sm">{{ questions[0].answer || "-" }}</p>
      <hr />
      <p class="font-airbnb-medium">Pikiran</p>
      <p class="mt-0 text-sm">{{ result || "-" }}</p>
      <hr />

      <p class="font-airbnb-medium">Jenis dan Distorsi pikiran</p>
      <p class="mt-0 text-sm">{{ distortions || "-" }}</p>
      <hr />

      <p class="font-airbnb-medium">Perasaan</p>
      <p class="mt-0 text-sm">{{ questions[6].answer || "-" }}</p>
      <hr />

      <p class="font-airbnb-medium">Tingkatan Perasaan</p>
      <p class="mt-0 text-sm">{{ questions[7].answer || "-" }}</p>
      <hr />

      <p class="font-airbnb-medium">Perilaku</p>
      <p class="mt-0 text-sm">{{ questions[8].answer || "-" }}</p>
      <hr />

      <p class="font-airbnb-medium">Konsekuensi</p>
      <p class="mt-0 text-sm">{{ questions[9].answer || "-" }}</p>
      <hr />

      <p class="font-airbnb-medium">
        Pikiran yang paling sering mengganggu pikiran
      </p>
      <p class="mt-0 text-sm">{{ questions[10].answer || "-" }}</p>
    </div>
    <a-button
      :loading="loading"
      @click="() => handleSubmit()"
      block
      type="primary"
    >
      <span class="font-airbnb">Next</span>
    </a-button>
    <ModalResult
      title="Result"
      :visible="visible"
      :handleOk="handleOk"
      :loading="loadingOk"
      :handleCancel="() => {}"
    >
      <template #content>
        <p class="font-airbnb-medimum text-center text-xl mb-4">Anda Cerdas</p>
        <p class="font-airbnb text-lg text-center">
          Kejujuranmu adalah awal dari suatu pencapaian diri yang baik menuju
          kebahagaiaan hidup
        </p>
      </template>
    </ModalResult>
  </div>
</template>

<script>
const ModalResult = () => import("@/components/Modal/general");
import { Button } from "ant-design-vue";
import { MAIN_CBT } from "@/router/name.types";
import { mapGetters } from "vuex";

export default {
  components: {
    ModalResult,
    "a-button": Button,
  },
  props: {
    questions: { type: Array, required: true, default: () => [] },
  },
  data() {
    return {
      result: "",
      visible: false,
      loadingOk: false,
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getAnswerQ5", "getDistortions"]),
    distortions() {
      const filtered = [];
      this.getAnswerQ5.forEach((e) => {
        filtered.push(this.getDistortions.detail[e].title);
      });
      return filtered.join(", ");
    },
  },
  methods: {
    reducingData() {
      let result = [];
      result = [...result, this.questions[1].answer.join(", ")];
      result = [...result, this.questions[2].answer.join(", ")];
      this.result = result.join(", ");
    },
    handleOk() {
      this.loadingOk = true;
      setTimeout(() => {
        this.$router.push({ name: MAIN_CBT });
        this.visible = false;
        this.loadingOk = false;
      }, 1000);
    },
    handleSubmit() {
      this.loading = true;
      setTimeout(() => {
        this.visible = true;
        this.loading = false;
      }, 2000);
    },
  },
  mounted() {
    this.reducingData();
  },
};
</script>

<style></style>
