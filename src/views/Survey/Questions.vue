<template>
  <div>
    <a-button
      class="button-back"
      shape="circle"
      icon="left"
      @click="handleBack"
    />
    <div class="min-h-screen px-6 pb-8 pt-24 flex flex-col justify-center">
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <div class="bg-white rounded-xl p-6">
          <div class="my-8">
            <div
              class="my-4"
              v-for="(question, index) in questions"
              :key="question"
            >
              <a-form-model-item :prop="`q${index + 1}`">
                <p class="font-airbnb mb-1">
                  {{ question }}
                </p>
                <a-select v-model="form[`q${index + 1}`]" style="width: 100%">
                  <a-select-option v-for="item in answerList" :key="item.value">
                    <span class="font-airbnb-medium text-sm">{{
                      item.desc
                    }}</span>
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
          </div>
          <a-button
            @click="handleSubmit"
            block
            type="primary"
            :loading="loading"
          >
            <span class="font-airbnb">Next</span>
          </a-button>
        </div>
      </a-form-model>
      <ModalResult
        title="Hasil Tingkat Tingkatan Ansietas"
        :visible="visible"
        :handleOk="handleOk"
        :handleCancel="handleCancel"
        :loading="loadingOk"
        :status="status"
        :desc="description"
      />
    </div>
  </div>
</template>

<script>
import { Button, FormModel, Select } from "ant-design-vue";
import ModalResult from "@/components/Modal/result";
import { MAIN_PAGE, FIRST_CBT } from "@/router/name.types";
import { mapGetters } from "vuex";
import QuizService from "@/services/resources/quiz.service";

export default {
  components: {
    "a-button": Button,
    "a-form-model": FormModel,
    "a-form-model-item": FormModel.Item,
    "a-select": Select,
    "a-select-option": Select.Option,
    ModalResult,
  },
  data() {
    return {
      loading: false,
      loadingOk: false,
      visible: false,
      total: 0,
      questions: [
        "1. Aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini sederhana dan mudah digunakan.",
        "2. Saya tidak dapat menyelesaikan seluruh tahapan dalam  aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini.",
        "3. Saya dapat memperoleh pikiran positif dengan  menggunakan aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini.",
        "4. Saya merasa aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini tidak dapat membantu menyelesaikan permasalahan saya.",
        "5. Saya dapat merasa lebih tenang dan nyaman  menggunakan aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web.",
        "6. Saya  merasa kesulitan  memahami dan menggunakan  aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini.",
        "7. Kapanpun dan dimanapun saya bisa menggunakan aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini.",
        "8. Penjelasan yang disampaikan diaplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini kurang jelas.",
        "9. Petunjuk dan informasi dari setiap sesi yang ditampilkan dilayar aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini mudah dipahami.",
        "10. Saya tidak dapat mengetahui keadaan emosi selama 2 mimggu  yang  disediakan diaplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini.",
        "11. Tampilan dari  aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini bagus dan menarik.",
        "12. Proses pelaksanaan yang disediakan didalam aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini tidak efektif.",
        "13. Saya menyukai aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini dan  merekomendasikan ke teman.",
        "14. Aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini merupakan aplikasi yang  kurang bermanfaat.",
        "15. Secara keseluruhan, saya puas dengan kemudahan pemakaian aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini.",
      ],
      answerList: [
        { value: 1, desc: "1. Sangat Tidak Setuju" },
        { value: 2, desc: "2. Tidak Setuju" },
        { value: 3, desc: "3. Ragu-ragu" },
        { value: 4, desc: "4. Setuju" },
        { value: 5, desc: "5. Sangat Setuju" },
      ],
      form: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
        q9: null,
        q10: null,
        q11: null,
        q12: null,
        q13: null,
        q14: null,
        q15: null,
      },
      rules: {
        q1: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q2: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q3: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q4: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q5: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q6: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q7: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q8: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q9: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q10: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q11: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q12: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q13: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q14: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q15: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
      },
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    status() {
      if (this.total <= 59) return "ringan";
      else if (this.total <= 74) return "sedang";
      else if (this.total >= 75) return "berat";
      return "ringan";
    },
    description() {
      if (this.total <= 59)
        return "Anda sebaiknya mengikuti latihan CBT, namun anda tidak perlu konsultasi ke terapis";
      else if (this.total <= 74)
        return "Anda harus mengikuti latihan CBT dan anda boleh atau tidak konsultasi ke terapiss";
      else if (this.total >= 75)
        return " Anda harus mengikuti Latihan CBT dan Sangat dianjurkan konsultasi ke terapis";
      return "";
    },
  },
  methods: {
    handleBack() {
      this.$router.replace({ name: MAIN_PAGE });
    },
    handleCancel() {
      this.visible = false;
    },
    handleOk() {
      this.loadingOk = true;
      setTimeout(() => {
        this.loadingOk = false;
        this.visible = false;
        this.$router.replace({ name: FIRST_CBT });
      }, 1000);
    },
    handleSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submitData();
        } else {
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        }
      });
    },
    submitData() {
      this.loading = true;
      QuizService.createSurvey({
        id_user: this.getUser.id,
        ...this.form,
      })
        .then(({ data: { message, result } }) => {
          if (result) {
            this.$router.replace({
              name: MAIN_PAGE,
            });
          } else {
            this.$message.error(message || "Data anda gagal diinput", 2.5);
          }
        })
        .catch((err) => {
          console.error(err);
          this.$message.error("Data anda gagal diinput", 2.5);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped>
.button-back {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
