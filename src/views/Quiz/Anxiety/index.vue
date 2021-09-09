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
          <p class="font-airbnb-medium text-base mb-0 text-center">
            Test Tingkat Ansietas
          </p>
          <p class="font-airbnb-medium text-base mb-0 text-center">
            (Kecemasanmu)
          </p>
          <div
            class="flex flex-row items-center px-3 mt-8 rounded-xl"
            style="background-color: #d6efff"
          >
            <a-icon type="info-circle" />
            <p class="ml-3 m-4">
              <span class="font-bold">Keterangan :</span> <br />
              Kadang kadang (1-2x seminggu) <br />
              Sering (3-4x seminggu) <br />
              Selalu (setiap hari)
            </p>
          </div>
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
import { Button, FormModel, Select, Icon } from "ant-design-vue";
import ModalResult from "@/components/Modal/result";
import { MAIN_PAGE, FIRST_CBT } from "@/router/name.types";
import QuizService from "@/services/resources/quiz.service";
import { mapGetters } from "vuex";

export default {
  components: {
    "a-button": Button,
    "a-form-model": FormModel,
    "a-form-model-item": FormModel.Item,
    "a-select": Select,
    "a-select-option": Select.Option,
    "a-icon": Icon,
    ModalResult,
  },
  data() {
    return {
      loading: false,
      loadingOk: false,
      visible: false,
      total: 0,
      questions: [
        "1. Saya merasa lebih gelisah atau gugup dan cemas dari biasanya.",
        "2. Saya merasa takut tanpa alasan yang jelas.",
        "3. Saya merasa seakan tubuh saya berantakan atau hancur.",
        "4. Saya mudah marah, tersinggung atau panic.",
        "5. Saya selalu merasa kesulitan mengerjakan segala sesuatu atau merasa sesuatu yang jelek akan terjadi.",
        "6. Kedua tangan dan kaki saya sering gemetar.",
        "7. Saya sering terganggu oleh sakit kepala, nyeri leher atau nyeri otot.",
        "8. Saya merasa badan saya lemah dan mudah lelah.",
        "9. Saya tidak dapat istirahat atau duduk dengan tenang.",
        "10. Saya merasa jantung saya berdebar-debar dengan keras dan cepat.",
        "11. Saya sering mengalami pusing.",
        "12. Saya sering pingsan atau merasa seperti pingsan.",
        "13. Saya mudah sesak napas tersengal-sengal.",
        "14. Saya merasa kaku atau mati rasa dan kesemutan pada jari-jari saya.",
        "15. Saya merasa sakit perut atau gangguan pencernaan.",
        "16. Saya sering kencing daripada biasanya.",
        "17. Saya merasa tangan saya dingin dan sering basah oleh keringat.",
        "18. Wajah saya terasa panas dan kemerahan.",
        "19. Saya sulit tidur dan tidak dapat istirahat malam.",
        "20. Saya mengalami mimpi-mimpi buruk.",
      ],
      answerList: [
        { value: 1, desc: "1. Tidak Pernah" },
        { value: 2, desc: "2. Kadang-Kadang" },
        { value: 3, desc: "3. Sering" },
        { value: 4, desc: "4. Selalu" },
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
        q16: null,
        q17: null,
        q18: null,
        q19: null,
        q20: null,
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
        q16: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q17: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q18: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q19: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q20: {
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
        return "Anda sebaiknya mengikuti latihan CBT,namun anda tidak perlu konsultasi ke terapis";
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
      QuizService.createDataAnsietas({
        id_user: this.getUser?.id || null,
        ...this.form,
      })
        .then(({ data: { message, result } }) => {
          if (message == "OK") {
            this.$message.success("Data anda berhasil diinput");
            this.total = Object.values(this.form).reduce(
              (acc, value) => acc + value
            );
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

<style scoped>
.button-back {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
