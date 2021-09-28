<template>
  <a-form-model ref="ruleForm" :model="form" :rules="rules">
    <div class="my-8">
      <div class="my-4" v-for="(question, index) in questions" :key="question">
        <a-form-model-item :prop="`q${index + 1}`">
          <p class="font-airbnb mb-1">
            {{ question }}
          </p>
          <a-select v-model="form[`q${index + 1}`]" style="width: 100%">
            <a-select-option v-for="item in answerList" :key="item.value">
              <span class="font-airbnb-medium text-sm">{{ item.desc }}</span>
            </a-select-option>
          </a-select>
        </a-form-model-item>
      </div>
    </div>
    <a-button
      class="mb-2"
      @click="handleSubmit"
      block
      type="primary"
      :loading="loading"
    >
      <span class="font-airbnb">Submit</span>
    </a-button>
  </a-form-model>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Select, FormModel, Button } from "ant-design-vue";
import { SET_USER } from "@/store/constants/mutations.type";

export default {
  components: {
    "a-select": Select,
    "a-select-option": Select.Option,
    "a-form-model": FormModel,
    "a-form-model-item": FormModel.Item,
    "a-button": Button,
  },
  data() {
    return {
      loading: false,
      answerList: [
        { value: 1, desc: "Ya" },
        { value: 0, desc: "Tidak" },
      ],
      form: {
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0,
        q9: 0,
        q10: 0,
        q11: 0,
        q12: 0,
        q13: 0,
        q14: 0,
        q15: 0,
        q16: 0,
        q17: 0,
        q18: 0,
        q19: 0,
        q20: 0,
        q21: 0,
        q22: 0,
        q23: 0,
        q24: 0,
        q25: 0,
        q26: 0,
        q27: 0,
        q28: 0,
        q29: 0,
      },
      questions: [
        "1. Apakah Anda sering merasa sakit kepala?",
        "2. Apakah Anda kehilangan nafsu makan?",
        "3. Apakah tidur Anda tidak nyenyak?",
        "4. Apakah Anda mudah merasa takut?",
        "5. Apakah Anda merasa cemas, tengang, atau khawatir?",
        "6. Apakah tangan Anda gemetar?",
        "7. Apakah anda mengalami gangguan pencernaan?",
        "8. Apakah Anda merasa sulit berpikir jernih?",
        "9. Apakah Anda merasa tidak bahagia?",
        "10. Apakah Anda lebih sering menangis?",
        "11. Apakah Anda merasa sulit untuk menikmati aktivitas sehari-hari?",
        "12. Apakah Anda megalami kesulitan untuk mengambil keputusan?",
        "13. Apakah aktivitas/tugas sehari-hari Anda terbengkalai?",
        "14. Apakah Anda merasa tidak mampu berperan dalam kehidupan ini?",
        "15. Apakah Anda kehilangan minat terhadap banyak hal?",
        "16. Apakah Anda merasa tidak berharga",
        "17. Apakah Anda mempunyai pikiran untuk mengakhiri hidup Anda?",
        "18. Apakah Anda merasa lelah sepanjang waktu?",
        "19. Apakah Anda merasa tidak enak diperut?",
        "20. Apakah Anda mudah lelah?",
        "21. Apakah Anda minum alkohol lebih banyak dari biasanya atau Apakah Anda menggunakan Narkoba?",
        "22. Apakah Anda yakin bahwa seseorang mencoba mencelakai Anda dengan cara tertentu?",
        "23. Apakah ada yang mengganggu atau hal yang tidak biasa dalam pikiran Anda?",
        "24. Apakah Anda pernah mendengar suara tanpa tahu sumbernya atau yang orang lain tidak dapat mendengar?",
        "25. Apakah Anda mengalami mimpi yang mengganggu tentang suatu bencana/musibah atau adakah satt saat Anda seolah mengalami kembali bencana itu ?",
        "26. Apakah Anda menghindari kegiatan, tempat, orang atau pikiran yang mengingatkan Anda akan bencana tersebut?",
        "27. Apakah minat anda terhadap teman dan kegiatan yang biasa Anda lakukan berkurang?",
        "28. Apakah Anda merasa sangat terganggu jika berada dalam situasi yang mengingatkan Anda akan bencana atau jika Anda berpikir tentang bencana itu?",
        "29. Apakah Anda kesulitan memahami atau mengekspresikan perasaan anda?",
      ],
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
        q21: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q22: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q23: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q24: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q25: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q26: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q27: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q28: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
        q29: {
          required: true,
          message: "Please input this field",
          trigger: "change",
        },
      },
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapMutations([SET_USER]),
    handleSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        console.log(valid);
      });
    },
    submittingData(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
