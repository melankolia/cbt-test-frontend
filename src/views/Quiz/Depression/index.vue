<template>
  <div>
    <a-button
      class="button-back"
      shape="circle"
      icon="left"
      @click="handleBack"
    />
    <div class="min-h-screen px-6 pb-8 pt-24 flex flex-col justify-center">
      <div class="bg-white rounded-xl p-6">
        <p class="font-airbnb-medium text-base mb-0 text-center">
          Test Tingkat Depresi
        </p>
        <div class="my-8">
          <div class="my-4" v-for="question in questions" :key="question">
            <p class="font-airbnb mb-1">
              {{ question }}
            </p>
            <a-select style="width: 100%" @change="handleChange">
              <a-select-option v-for="item in answerList" :key="item">
                <span class="font-airbnb-medium text-sm">{{ item }}</span>
              </a-select-option>
            </a-select>
          </div>
        </div>
        <a-button @click="handleSubmit" block type="primary" :loading="loading">
          <span class="font-airbnb">Next</span>
        </a-button>
      </div>
      <ModalResult
        title="Hasil Tingkat Tingkatan Depresi"
        :visible="visible"
        :handleOk="handleOk"
        :handleCancel="handleCancel"
        :loading="loadingOk"
        :status="result.status"
      />
    </div>
  </div>
</template>

<script>
import { Button, Select } from "ant-design-vue";
import ModalResult from "@/components/Modal/result";
import { MAIN_PAGE, FIRST_CBT } from "@/router/name.types";

export default {
  components: {
    "a-button": Button,
    "a-select": Select,
    "a-select-option": Select.Option,
    ModalResult,
  },
  data() {
    return {
      result: {
        status: "tinggi",
      },
      loading: false,
      loadingOk: false,
      visible: false,
      questions: [
        "1. Secara keseluruhan saya puas dengan diri saya.",
        "2. Kadang-kadang saya merasa diri saya tidak baik sama sekali.",
        "3. Saya merasa kalau saya memiliki beberapa sifat yang baik.",
        "4. Saya mampu melakukan suatu perkerjaan sebaik orang lain.",
        "5. Saya merasa tidak banyak yang bisa saya banggakan dari diri saya.",
        "6. Kadang-kadang saya merasa tidak berguna.",
        "7. Saya merasa diri saya berharga setidak- tidaknya sama dengan orang lain.",
        "8. Saya berharap  dapat lebih menghargai diri sendiri.",
        "9. Saya cendrung melihat diri saya sebagai orang yang gagal dalam banyak hal.",
        "10. Saya bersikap positif terhadap diri saya sendiri.",
      ],
      answerList: [
        "4. Sangat Setuju",
        "3. Setuju",
        "2. Tidak Setuju",
        "1. Sangat Tidak Setuju",
      ],
    };
  },
  methods: {
    handleBack() {
      this.$router.replace({ name: MAIN_PAGE });
    },
    handleChange(e) {
      console.log(e);
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
      setTimeout(() => {
        this.loading = false;
        this.visible = true;
      }, 1000);
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
