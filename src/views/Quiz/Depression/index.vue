<template>
  <div>
    <a-button
      class="button-back"
      shape="circle"
      icon="left"
      @click="handleBack"
    />
    <div class="min-h-screen px-6 py-8 flex flex-col justify-center">
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <div class="bg-white rounded-xl p-6">
          <p class="font-airbnb-medium text-base mb-0 text-center">
            Test Tingkat Depresi
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
    </div>
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
</template>

<script>
import { Button, FormModel, Select, Icon } from "ant-design-vue";
import ModalResult from "@/components/Modal/result";
import { MAIN_PAGE, FIRST_CBT } from "@/router/name.types";
import QuizService from "@/services/resources/quiz.service";
import { mapGetters } from "vuex";

export default {
  components: {
    "a-form-model": FormModel,
    "a-form-model-item": FormModel.Item,
    "a-button": Button,
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
        "1. Kurang tertarik atau bergairah dalam melakukan apapun.",
        "2. Merasa murung, muram atau putus asa.",
        "3. Sulit tidur atau mudah terbangun atau terlalu banyak tidur.",
        "4. Merasa Lelah atau kurang bertenaga.",
        "5. Kurang nafsu makan atau makan terlalu banyak.",
        "6. Kurang percaya diri atau merasa bahwa anda orang yang gagal.",
        "7. Sulit berkonsentrasi pada sesuatu contohnya  membaca koran.",
        "8. Bergerak atau berbicara sangat lambat sehingga orang lain memperhatikan atau mengabaikannya.",
        "9. Merasa lebih baik mati atau melukai diri sendiri dengan cara apapun.",
      ],
      answerList: [
        { value: 0, desc: "Tidak Pernah" },
        { value: 1, desc: "Kadang-Kadang" },
        { value: 2, desc: "Sering" },
        { value: 3, desc: "Selalu" },
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
      },
      result: {
        total: 1,
        status: "rendah",
      },
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    status() {
      if (this.total <= 9) return "ringan";
      else if (this.total <= 14) return "sedang";
      else if (this.total >= 19) return "berat";
      return "ringan";
    },
    description() {
      if (this.total <= 4)
        return "Boleh ya /tidak latihan CBT namun tidak perlu ke terapis";
      else if (this.total <= 9)
        return "Perlu Latihan CBT namun tidak perlu ke terapis";
      else if (this.total <= 14)
        return "Perlu Latihan CBT dan dianjurkan ke terapis";
      else if (this.total >= 19)
        return "Perlu terapis dan penataksanaan psikofarmaka";
      return "Boleh ya /tidak latihan CBT namun tidak perlu ke terapis";
    },
  },
  methods: {
    handleBack() {
      this.$router.replace({ name: MAIN_PAGE });
    },
    handleChange() {
      // console.log(e);
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
      this.loading = true;
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
      QuizService.createDataDepresi({
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
  margin: 20px;
}
</style>
