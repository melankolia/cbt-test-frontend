<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Result</p>
    <div class="text-left border border-gray-300 rounded-xl space-y-4 p-2 mb-4">
      <div>
        <p class="font-airbnb-medium">
          Bukti atau pengalaman apa yang mendukung seringnya muncul pikiran
          negatifmu?
        </p>
        <p class="my-2 text-sm">{{ questions[2].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">
          Apa yang akan anda katakan ke teman dekatmu jika dia berpikir hal
          negative yang sama denganmu
        </p>
        <p class="my-2 text-sm">{{ questions[3].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">
          Apakah ada penjelasan lainnya untuk situasi atau pikiran tersebut?
        </p>
        <p class="my-2 text-sm">{{ questions[4].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">
          Apa yang akan dikatakan teman dekatmu ketika anda tidak bisa menemukan
          bukti untuk melawan atau mengubah pikiran negative yang muncul
          tersebut
        </p>
        <p class="my-2 text-sm">{{ questions[5].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">
          Apa pengalaman positif yang kamu punya untuk membantu melawan pikiran
          negatif mu yang tidak benar?
        </p>
        <p class="my-2 text-sm">{{ questions[6].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">
          Apakah ada bukti tambahan dari pengalaman positif yang pernah anda
          alami untuk melawan dan mengubah pikiran negative tersebut?
        </p>
        <p class="my-2 text-sm">{{ questions[7].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">
          Coba bandingkan bukti yang mendukung pikiran negatifmu dengan bukti
          yang menentang pikiran negatifmu? Apa kesimpulanmu?
        </p>
        <p class="my-2 text-sm">{{ questions[8].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">
          Lihat kembali Latihan CBT yang sudah dikerjakan. Tuliskan dan ucapkan
          dengan lantang pikiran positif untuk menggantikan pikiran negatif
          tersebut.
        </p>
        <p class="my-2 text-sm">{{ questions[9].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">Bagaimana perasaanmu sekarang?</p>
        <p class="my-2 text-sm">{{ questions[10].answer || "-" }}</p>
        <hr />
      </div>
      <div>
        <p class="font-airbnb-medium">Bagaimana tingkat perasaanmu sekarang?</p>
        <p class="my-2 text-sm">{{ questions[11].answer || "-" }}</p>
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
          Kesungguhanmu mengerjakan sesuatu akan memberikan hasil yang sungguh
          sungguh nyata
        </p>
      </template>
    </ModalResult>
  </div>
</template>

<script>
const ModalResult = () => import("@/components/Modal/general");
import QuizService from "@/services/resources/quiz.service";
import { Button } from "ant-design-vue";
import { PRACTICES_CBT } from "@/router/name.types";
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
      visible: false,
      loadingOk: false,
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    handleOk() {
      this.loadingOk = true;
      setTimeout(() => {
        this.$router.push({ name: PRACTICES_CBT });
        this.visible = false;
        this.loadingOk = false;
      }, 1000);
    },
    handleSubmit() {
      const payload = {
        id_user: this.getUser.id,
        step_11: this?.questions[2].answer,
        step_12: this?.questions[3].answer,
        step_13: this?.questions[4].answer,
        step_14: this?.questions[5].answer,
        step_15: this?.questions[6].answer,
        step_16: this?.questions[7].answer,
        step_17: this?.questions[8].answer,
        step_18: this?.questions[9].answer,
        step_19: this?.questions[10].answer,
        step_20: this?.questions[11].answer,
      };
      this.submit(payload);
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    submit(payload) {
      this.loading = true;
      QuizService.createDataCBTMainSection(payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.$message.success("Data anda berhasil diinput");
            this.visible = true;
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
};
</script>

<style></style>
