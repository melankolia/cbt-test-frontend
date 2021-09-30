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
            Survey Kepuasan System Usability Scale Penggunaan Aplikasi CBT
            Berbasis Web
          </p>
          <div
            class="flex flex-row items-center px-3 mt-8 rounded-xl"
            style="background-color: #d6efff"
          >
            <a-icon type="info-circle" />
            <p class="ml-3 m-4">
              Pilihlah salah satu jawaban yang sesuai dengan penilaian anda
              setelah anda menggunakan
              <span class="font-bold">
                <i>Prototype Aplikasi Cognitive Behaviour Therapy (CBT)</i>
              </span>
              Berbasis Web
            </p>
          </div>
          <div class="my-8">
            <div class="my-4">
              <a-form-model-item prop="q1">
                <p class="font-airbnb mb-1">A. Inisial Nama</p>
                <a-input v-model="form.q1" placeholder="Inisial Nama" />
              </a-form-model-item>
            </div>
            <div class="my-4">
              <a-form-model-item prop="q2">
                <p class="font-airbnb mb-1">B. Usia</p>
                <a-input v-model="form.q2" placeholder="Tahun" type="number">
                  <p class="font-airbnb" slot="suffix">Tahun</p>
                </a-input>
              </a-form-model-item>
            </div>
            <div class="my-4">
              <a-form-model-item prop="q3">
                <p class="font-airbnb mb-1">C. Jenis Kelamin</p>
                <a-select v-model="form.q3" style="width: 100%">
                  <a-select-option
                    v-for="item in jenisKelaminList"
                    :key="item.value"
                  >
                    <span class="font-airbnb-medium text-sm">{{
                      item.desc
                    }}</span>
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="my-4">
              <a-form-model-item prop="q4">
                <p class="font-airbnb mb-1">D. Jika Perempuan</p>
                <a-select v-model="form.q4" style="width: 100%">
                  <a-select-option
                    v-for="item in perempuanList"
                    :key="item.value"
                  >
                    <span class="font-airbnb-medium text-sm">{{
                      item.desc
                    }}</span>
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="my-4">
              <a-form-model-item prop="q5">
                <p class="font-airbnb mb-1">E. Tingkat Pendidikan Terakhir</p>
                <a-select v-model="form.q5" style="width: 100%">
                  <a-select-option
                    v-for="item in tingkatPendidikanList"
                    :key="item.value"
                  >
                    <span class="font-airbnb-medium text-sm">{{
                      item.desc
                    }}</span>
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="my-4">
              <a-form-model-item prop="q6">
                <p class="font-airbnb mb-1">F. Status Pernikahan</p>
                <a-select v-model="form.q6" style="width: 100%">
                  <a-select-option
                    v-for="item in statusPernikahanList"
                    :key="item.value"
                  >
                    <span class="font-airbnb-medium text-sm">{{
                      item.desc
                    }}</span>
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="my-4">
              <a-form-model-item prop="q7">
                <p class="font-airbnb mb-1">G. Pekerjaan</p>
                <a-select v-model="form.q7" style="width: 100%">
                  <a-select-option
                    v-for="item in pekerjaanList"
                    :key="item.value"
                  >
                    <span class="font-airbnb-medium text-sm">{{
                      item.desc
                    }}</span>
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="my-4" v-if="form.q7 == 'mahasiswa'">
              <a-form-model-item prop="q11">
                <p class="font-airbnb mb-1">Asal Universitas</p>
                <a-input
                  v-model="form.q11"
                  placeholder="Contoh: Universitas Sriwijaya"
                />
              </a-form-model-item>
            </div>
            <div class="my-4" v-else-if="form.q7 == 'perawat'">
              <p class="font-airbnb mb-1">Nama Lembaga Pelayanan Kesehatan</p>
              <a-input
                v-model="form.q11"
                placeholder="Contoh: Rumah Sakit Siti Fatimah "
              />
            </div>
            <div class="my-4">
              <a-form-model-item prop="q8">
                <p class="font-airbnb m-0">H. Riwayat Penyakit Kronis</p>
                <p class="font-airbnb mb-1">
                  (Diabetes / Hipertensi, Maag Kronis, TBC, Jantung, Kanker,
                  Stroke, Rematik)
                </p>
                <a-select v-model="form.q8" style="width: 100%">
                  <a-select-option
                    v-for="item in penyakitList"
                    :key="item.value"
                  >
                    <span class="font-airbnb-medium text-sm">{{
                      item.desc
                    }}</span>
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="my-4">
              <a-form-model-item prop="q9">
                <p class="font-airbnb mb-1">
                  I. Riwayat Sebagai Penyintas Covid-19
                </p>
                <a-select v-model="form.q9" style="width: 100%">
                  <a-select-option
                    v-for="item in riwayatList"
                    :key="item.value"
                  >
                    <span class="font-airbnb-medium text-sm">{{
                      item.desc
                    }}</span>
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="my-4">
              <a-form-model-item prop="q10">
                <p class="font-airbnb mb-1">
                  J. Frekuensi Menggunakan Aplikasi CBT Web ini
                </p>
                <a-select v-model="form.q10" style="width: 100%">
                  <a-select-option
                    v-for="item in frequencyList"
                    :key="item.value"
                  >
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
  </div>
</template>

<script>
import { Button, FormModel, Input, Select, Icon } from "ant-design-vue";
import { MAIN_PAGE, FIRST_CBT, SURVEY_QUESTIONS } from "@/router/name.types";
import QuizService from "@/services/resources/quiz.service";
import { mapGetters } from "vuex";

export default {
  components: {
    "a-button": Button,
    "a-form-model": FormModel,
    "a-form-model-item": FormModel.Item,
    "a-input": Input,
    "a-select": Select,
    "a-select-option": Select.Option,
    "a-icon": Icon,
  },
  data() {
    return {
      loading: false,
      loadingOk: false,
      visible: false,
      total: 0,
      jenisKelaminList: [
        {
          value: "Perempuan",
          desc: "Perempuan",
        },
        {
          value: "Laki-Laki",
          desc: "Laki-Laki",
        },
      ],
      perempuanList: [
        {
          value: "hamil",
          desc: "Hamil",
        },
        {
          value: "tidak_hamil",
          desc: "Tidak Hamil",
        },
      ],
      tingkatPendidikanList: [
        {
          desc: "SD",
          value: "sd",
        },
        {
          desc: "SMP",
          value: "smp",
        },
        {
          desc: "SMA",
          value: "sma",
        },
        {
          desc: "Diploma",
          value: "diploma",
        },
        {
          desc: "Sarjana",
          value: "sarjana",
        },
        {
          desc: "Magister",
          value: "magister",
        },
      ],
      statusPernikahanList: [
        { value: "menikah", desc: "Menikah" },
        { value: "belum_menikah", desc: "Belum Menikah" },
        { value: "cerai", desc: "Cerai" },
      ],
      pekerjaanList: [
        { value: "pns", desc: "PNS" },
        { value: "karyawan_swasta", desc: "Karyawan Swasta" },
        { value: "mahasiswa", desc: "Mahasiswa" },
        { value: "ibu_rumah_tangga", desc: "Ibu Rumah Tangga" },
        { value: "guru_dosen", desc: "Guru Dosen" },
        { value: "perawat", desc: "Perawat" },
      ],
      penyakitList: [
        { value: "pernah_menderita_sakit", desc: "Pernah Menderita Sakit" },
        {
          value: "tidak_pernah_menderita_sakit",
          desc: "Tidak Pernah Menderita Sakit",
        },
        { value: "sedang_menderita_sakit", desc: "Sedang Menderita Sakit" },
      ],
      frequencyList: [
        { value: "1", desc: "1 Kali" },
        { value: "2", desc: "2 Kali" },
        { value: "3", desc: "> 2 Kali" },
      ],
      riwayatList: [
        { value: "pernah", desc: "Pernah" },
        { value: "tidak_pernah", desc: "Tidak Pernah" },
        { value: "isoman", desc: "Sedang Menderita Sakit / Isoman" },
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
      },
    };
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
      QuizService.createIdentities({
        id_user: this.getUser.id,
        name: this.form.q1,
        age: this.form.q2,
        gender: this.form.q3,
        is_pregnant: this.form.q4 === "hamil" ? true : false,
        education: this.form.q5,
        marital_status: this.form.q6,
        job: this.form.q7,
        hospital_sheet: this.form.q8,
        is_covid19: this.form.q9,
        frequencies: this.form.q10,
        additional_field: this.form.q11,
      })
        .then(({ data: { message, result } }) => {
          if (result) {
            this.$router.push({
              name: SURVEY_QUESTIONS,
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
  watch: {
    form: {
      handler() {
        this.$refs.ruleForm.clearValidate();
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["getUser"]),
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
