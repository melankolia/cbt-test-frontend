<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Result</p>
    <div class="text-left border border-gray-300 rounded-xl space-y-2 mb-4">
      <div class="background-colorized rounded-t-xl p-2">
        <p class="font-airbnb-medium">Situasi</p>
        <a-tag color="blue">
          <p class="mt-0 text-sm">{{ questions[0].answer || "-" }}</p>
        </a-tag>
      </div>
      <div class="p-2">
        <p class="font-airbnb-medium">Pikiran</p>
        <a-tag
          v-for="(item, index) in result"
          :color="index % 2 == 0 ? 'blue' : 'pink'"
          :key="index"
        >
          <p class="mt-0 text-sm">{{ item || "-" }}</p>
        </a-tag>
      </div>
      <div class="background-colorized p-2">
        <p class="font-airbnb-medium">Jenis dan Distorsi pikiran</p>
        <a-tag
          v-for="(item, index) in distortions"
          :color="index % 2 == 0 ? 'blue' : 'pink'"
          :key="index"
        >
          <p class="mt-0 text-sm">{{ item || "-" }}</p>
        </a-tag>
      </div>
      <div class="p-2">
        <p class="font-airbnb-medium">Perasaan</p>
        <a-tag color="blue">
          <p class="mt-0 text-sm">{{ questions[6].answer || "-" }}</p>
        </a-tag>
      </div>
      <div class="background-colorized p-2">
        <p class="font-airbnb-medium">Tingkatan Perasaan</p>
        <a-tag color="blue">
          <p class="mt-0 text-sm">{{ questions[7].answer || "-" }}</p>
        </a-tag>
      </div>
      <div class="p-2">
        <p class="font-airbnb-medium">Perilaku</p>
        <a-tag color="blue">
          <p class="mt-0 text-sm">{{ questions[8].answer || "-" }}</p>
        </a-tag>
      </div>
      <div class="background-colorized p-2">
        <p class="font-airbnb-medium">Konsekuensi</p>
        <a-tag color="blue">
          <p class="mt-0 text-sm">{{ questions[9].answer || "-" }}</p>
        </a-tag>
      </div>
      <div class="p-2">
        <p class="font-airbnb-medium">
          Pikiran yang paling sering mengganggu pikiran
        </p>
        <a-tag color="blue">
          <p class="mt-0 text-sm">{{ questions[10].answer || "-" }}</p>
        </a-tag>
      </div>
    </div>
    <a-button
      :loading="loading"
      @click="() => handleSubmit()"
      block
      type="primary"
    >
      <span class="font-airbnb">Next</span>
    </a-button>
  </div>
</template>

<script>
import QuizService from "@/services/resources/quiz.service";
import { Button, Tag } from "ant-design-vue";
import { FINAL_FIRST_CBT } from "@/router/name.types";
import { mapGetters } from "vuex";

export default {
  components: {
    "a-button": Button,
    "a-tag": Tag,
  },
  props: {
    questions: { type: Array, required: true, default: () => [] },
  },
  data() {
    return {
      result: "",
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getAnswerQ5", "getDistortions", "getUser"]),
    distortions() {
      const filtered = [];
      this.getAnswerQ5.forEach((e) => {
        filtered.push(this.getDistortions.detail[e].title);
      });
      return filtered;
    },
    payloadDistortions() {
      const filtered = [];
      this.getAnswerQ5.forEach((e) => {
        filtered.push(this.getDistortions.detail[e].title);
      });
      return filtered.join(", ");
    },
    payloadResult() {
      let result = [];
      result = [...result, this.questions[1].answer.join(", ")];
      result = [...result, this.questions[2].answer.join(", ")];
      return result.join(", ");
    },
  },
  methods: {
    reducingData() {
      let result = [];
      result = [...result, ...this.questions[1].answer];
      result = [...result, ...this.questions[2].answer];
      this.result = result;
    },
    handleSubmit() {
      const payload = {
        id_user: this.getUser.id,
        situasi: this?.questions[0].answer,
        pikiran: this.payloadResult,
        distorsi_pikiran: this.payloadDistortions,
        perasaan: this?.questions[6].answer,
        tingkat_perasaan: this?.questions[7].answer,
        perilaku: this?.questions[8].answer,
        konsekuensi: this?.questions[9].answer,
        paling_mengganggu: this?.questions[10].answer,
      };
      this.submit(payload);
    },
    submit(payload) {
      this.loading = true;
      QuizService.createDataCBTFirstSection(payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.$message.success("Data anda berhasil diinput");
            this.$router.replace({ name: FINAL_FIRST_CBT });
          } else {
            this.$message.error(result || "Data anda gagal diinput", 2.5);
          }
        })
        .catch((err) => {
          this.$message.error(
            err?.response?.data?.result || "Data anda gagal diinput",
            2.5
          );
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.reducingData();
  },
};
</script>

<style scoped>
.background-colorized {
  background-color: #f7f7fc;
}
</style>
