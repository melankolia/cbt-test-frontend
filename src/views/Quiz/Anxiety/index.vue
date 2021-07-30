<template>
  <div>
    <a-button
      class="button-back"
      shape="circle"
      icon="left"
      @click="handleBack"
    />
    <div class="min-h-screen px-6 py-8 flex flex-col justify-center">
      <div class="bg-white rounded-xl p-6">
        <p class="font-airbnb-medium text-base mb-0 text-center">
          Test Tingkat Ansietas
        </p>
        <p class="font-airbnb-medium text-base mb-0 text-center">
          (Kecemasanmu)
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
    </div>
    <ModalResult
      title="Hasil Tingkat Tingkatan Ansietas"
      :visible="visible"
      :handleOk="handleOk"
      :handleCancel="handleCancel"
      :loading="loadingOk"
      :status="result.status"
    />
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
      loading: false,
      loadingOk: false,
      visible: false,
      questions: [
        "1. Saya berpikir orang lain memusuhi saya.",
        "2. Saya berpikir orang lain menyebalkan.",
        "3. Saya berkata kasar pada orang lain untuk melampiaskan kekesalan saya.",
        "4. Jika kesal saya merusak barang.",
        "5. Saya tidak bercerita pada orang lain jika ada masalah.",
      ],
      answerList: [
        "4. Sangat Setuju",
        "3. Setuju",
        "2. Tidak Setuju",
        "1. Sangat Tidak Setuju",
      ],
      result: {
        total: 1,
        status: "rendah",
      },
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
