<template>
  <div class="flex flex-col">
    <p class="font-airbnb-medium text-3xl mb-0">Detail Responden</p>
    <a-divider class="mb-4"></a-divider>
    <a-spin size="large" v-if="loading" />
    <a-descriptions bordered v-else>
      <a-descriptions-item label="Name" :span="3">
        {{ detail.name || "-" }}
      </a-descriptions-item>
      <a-descriptions-item label="Username" :span="3">
        {{ detail.username || "-" }}
      </a-descriptions-item>
      <a-descriptions-item label="Status" :span="3">
        <a-tag :color="checkColorStatus(detail)">
          {{ convertStatus(detail) || "-" | toTitle }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="Depresi" :span="3">
        <a-collapse v-model="expandAnxiety" expand-icon-position="right">
          <a-collapse-panel key="1" header="Tabel Depresi">
            <a-descriptions bordered>
              <a-descriptions-item
                v-for="(e, i, index) in detail.Depresi"
                :key="i"
                :label="`Question ${index + 1}`"
                :span="3"
              >
                <a-tag :color="checkColorAnx(e)">
                  {{ convertDescAnx(e) }}
                </a-tag>
              </a-descriptions-item>
            </a-descriptions>
          </a-collapse-panel>
        </a-collapse>
      </a-descriptions-item>
      <a-descriptions-item label="Total Nilai Depresi" :span="3">
        {{ detail.totalDepresi || "-" }}
      </a-descriptions-item>
      <a-descriptions-item label="Tingkatan Depresi" :span="3">
        <a-tag :color="checkColorTingkatanDep(detail)">
          {{ convertDescTingkatanDep(detail) }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="Ansietas" :span="3">
        <a-collapse v-model="expandDepresi" expand-icon-position="right">
          <a-collapse-panel key="1" header="Tabel Ansietas">
            <a-descriptions bordered>
              <a-descriptions-item
                v-for="(e, i, index) in detail.Ansieta"
                :key="i"
                :label="`Question ${index + 1}`"
                :span="3"
              >
                <a-tag :color="checkColorDep(e)">
                  {{ convertDescDep(e) }}
                </a-tag>
              </a-descriptions-item>
            </a-descriptions>
          </a-collapse-panel>
        </a-collapse>
      </a-descriptions-item>
      <a-descriptions-item label="Total Nilai Ansietas" :span="3">
        {{ detail.totalAnsietas || "-" }}
      </a-descriptions-item>
      <a-descriptions-item label="Tingkatan Ansietas" :span="3">
        <a-tag :color="checkColorTingkatanAnx(detail)">
          {{ convertDescTingkatanAnx(detail) }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="CBT" :span="3">
        <a-collapse v-model="expandCBT" expand-icon-position="right">
          <a-collapse-panel key="1" header="Tabel CBT First Section">
            <a-descriptions bordered>
              <a-descriptions-item key="1" :span="3" label="Situasi">
                {{ detail.CBT_FirstSection && detail.CBT_FirstSection.situasi }}
              </a-descriptions-item>
              <a-descriptions-item key="2" :span="3" label="Pikiran">
                {{ detail.CBT_FirstSection && detail.CBT_FirstSection.pikiran }}
              </a-descriptions-item>
              <a-descriptions-item
                key="3"
                :span="3"
                label="Jenis dan Distorsi pikiran"
              >
                {{
                  detail.CBT_FirstSection &&
                  detail.CBT_FirstSection.distorsi_pikiran
                }}
              </a-descriptions-item>
              <a-descriptions-item key="3" :span="3" label="Perasaan">
                {{
                  detail.CBT_FirstSection && detail.CBT_FirstSection.perasaan
                }}
              </a-descriptions-item>
              <a-descriptions-item key="4" :span="3" label="Tingkatan Perasaan">
                {{
                  detail.CBT_FirstSection &&
                  detail.CBT_FirstSection.tingkatan_perasaan
                }}
              </a-descriptions-item>
              <a-descriptions-item key="5" :span="3" label="Perilaku">
                {{
                  detail.CBT_FirstSection && detail.CBT_FirstSection.perilaku
                }}
              </a-descriptions-item>
              <a-descriptions-item key="6" :span="3" label="Konsekuensi">
                {{
                  detail.CBT_FirstSection && detail.CBT_FirstSection.konsekuensi
                }}
              </a-descriptions-item>
              <a-descriptions-item
                key="7"
                :span="3"
                label="Pikiran yang paling sering mengganggu pikiran"
              >
                {{
                  detail.CBT_FirstSection &&
                  detail.CBT_FirstSection.paling_mengganggu
                }}
              </a-descriptions-item>
            </a-descriptions>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Tabel CBT Main Section">
            <a-descriptions bordered>
              <a-descriptions-item
                key="11"
                :span="3"
                label="Bukti atau pengalaman apa yang mendukung seringnya muncul pikiran negatifmu?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_11 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="12"
                :span="3"
                label="Apa yang akan anda katakan ke teman dekatmu jika dia berpikir hal negatif mengenai dirimu"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_12 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="13"
                :span="3"
                label="Apakah ada penjelasan lainnya untuk situasi atau pikiran tersebut ?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_13 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="14"
                :span="3"
                label="Apa yang akan dikatakan teman dekatmu ketika anda tidak bisa menemukan bukti untuk melawan atau mengubah pikiran negatif yang muncul tersebut ?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_14 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="15"
                :span="3"
                label="Apa pengalaman positif yang kamu punya untuk membantu melawan pikiran negatif mu yang tidak benar ?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_15 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="16"
                :span="3"
                label="Apakah ada bukti tambahan dari pengalaman positif yang pernah anda alami untuk melawan dan mengubah pikiran negatif tersebut ?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_16 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="17"
                :span="3"
                label="Coba bandingkan bukti yang mendukung pikiran negatifmu dengan bukti yang menentang pikiran negatifmu? Apa kesimpulanmu ?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_17 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="18"
                :span="3"
                label="Lihat kembali Latihan CBT yang sudah dikerjakan. Tuliskan dan ucapkan dengan lantang pikiran positif untuk menggantikan pikiran negatif tersebut ?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_18 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="19"
                :span="3"
                label="Bagaimana perasaanmu sekarang ?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_19 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="20"
                :span="3"
                label="Bagaimana tingkat perasaanmu sekarang ?"
              >
                {{ detail.CBT_MainSection && detail.CBT_MainSection.step_20 }}
              </a-descriptions-item>
            </a-descriptions>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="Tabel CBT Practice Section">
            <a-descriptions bordered>
              <a-descriptions-item
                key="21"
                :span="3"
                label="Apa yang akan anda lakukan setelah mendapatkan pikiran baru yang positif mengenai dirimu ?"
              >
                {{
                  detail.CBT_PracticeSection &&
                  detail.CBT_PracticeSection.step_21
                }}
              </a-descriptions-item>
              <a-descriptions-item
                key="22"
                :span="3"
                label="Apa alasan mu melakukan tindakan (perilaku) tersebut ?"
              >
                {{
                  detail.CBT_PracticeSection &&
                  detail.CBT_PracticeSection.step_22
                }}
              </a-descriptions-item>
              <a-descriptions-item
                key="23"
                :span="3"
                label="Apakah ada perilaku lainnya yang bermanfaat yang dapat anda lakukan ?"
              >
                {{
                  detail.CBT_PracticeSection &&
                  detail.CBT_PracticeSection.step_23
                }}
              </a-descriptions-item>
              <a-descriptions-item
                key="24"
                :span="3"
                label="Apa yang diharapkan dari tindakan (perilaku) yang akan anda lakukan tersebut ?"
              >
                {{
                  detail.CBT_PracticeSection &&
                  detail.CBT_PracticeSection.step_24
                }}
              </a-descriptions-item>
              <a-descriptions-item
                key="25"
                :span="3"
                label="Apakah yang akan anda katakan kepada teman atau keluargamu jika mereka tidak mendukung tindakan (perilaku) baru tersebut ?"
              >
                {{
                  detail.CBT_PracticeSection &&
                  detail.CBT_PracticeSection.step_25
                }}
              </a-descriptions-item>
              <a-descriptions-item
                key="26"
                :span="3"
                label="Apakah anda bersedia menguatkan kembali pikiran positif dan memelihara perasaan bahagia sebelumnya?Tuliskan alasan pikiran positifmu !"
              >
                {{
                  detail.CBT_PracticeSection &&
                  detail.CBT_PracticeSection.step_26
                }}
              </a-descriptions-item>
            </a-descriptions>
          </a-collapse-panel>
        </a-collapse>
      </a-descriptions-item>
      <a-descriptions-item label="Survey" :span="3">
        <a-collapse v-model="expandSurveys" expand-icon-position="right">
          <a-collapse-panel key="1" header="Identitas Responden">
            <a-descriptions bordered>
              <a-descriptions-item key="1" :span="3" label="Inisial Nama">
                {{ detail.Identity && detail.Identity.name }}
              </a-descriptions-item>
              <a-descriptions-item key="2" :span="3" label="Usia">
                {{ detail.Identity && detail.Identity.age }}
              </a-descriptions-item>
              <a-descriptions-item key="3" :span="3" label="Jenis Kelamin">
                {{ detail.Identity && detail.Identity.gender }}
              </a-descriptions-item>
              <a-descriptions-item
                v-if="detail.Identity && detail.Identity.gender == 'Perempuan'"
                key="4"
                :span="3"
                label="Hamil / Tidak Hamil (Jika Perempuan)"
              >
                {{
                  detail.Identity && detail.Identity.is_pregnant
                    ? "Hamil"
                    : "Tidak Hamil"
                }}
              </a-descriptions-item>
              <a-descriptions-item
                key="5"
                :span="3"
                label="Tingkat Pendidikan Terakhir"
              >
                {{ detail.Identity && detail.Identity.education | toTitle }}
              </a-descriptions-item>
              <a-descriptions-item key="6" :span="3" label="Status Pernikahan">
                {{
                  detail.Identity &&
                  detail.Identity.marital_status | snakeToTitle
                }}
              </a-descriptions-item>
              <a-descriptions-item key="6" :span="3" label="Pekerjaan">
                {{ detail.Identity && detail.Identity.job | toTitle }}
              </a-descriptions-item>
              <a-descriptions-item
                v-if="isMahasiswaOrNakes"
                key="6"
                :span="3"
                :label="
                  isMahasiswa
                    ? 'Asal Universitas'
                    : 'Nama Lembaga Pelayanan Kesehatan'
                "
              >
                {{ detail.Identity && detail.Identity.additional_field }}
              </a-descriptions-item>
              <a-descriptions-item
                key="6"
                :span="3"
                label="Riwayat Penyakit Kronis"
              >
                {{
                  detail.Identity &&
                  detail.Identity.hospital_sheet | snakeToTitle
                }}
              </a-descriptions-item>
              <a-descriptions-item
                key="6"
                :span="3"
                label="Riwayat Sebagai Penyintas Covid-19"
              >
                {{ detail.Identity && detail.Identity.is_covid19 | toTitle }}
              </a-descriptions-item>
              <a-descriptions-item
                key="6"
                :span="3"
                label="Frekuensi Menggunakan Aplikasi CBT Web ini"
              >
                {{ detail.Identity && detail.Identity.frequencies }} Kali
              </a-descriptions-item>
            </a-descriptions>
          </a-collapse-panel>
        </a-collapse>
        <a-collapse v-model="expandSurveys" expand-icon-position="right">
          <a-collapse-panel key="2" header="Hasil Survey">
            <a-descriptions bordered>
              <a-descriptions-item
                key="1"
                :span="3"
                label="Aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini sederhana dan mudah digunakan."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey &&
                      detail.Survey &&
                      convertSurvey(detail.Survey.q1)) ||
                    "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="2"
                :span="3"
                label="Saya tidak dapat menyelesaikan seluruh tahapan dalam  aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q2)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="3"
                :span="3"
                label="Saya dapat memperoleh pikiran positif dengan  menggunakan aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q3)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="4"
                :span="3"
                label="Saya merasa aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini tidak dapat membantu menyelesaikan permasalahan saya."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q4)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="5"
                :span="3"
                label="Saya dapat merasa lebih tenang dan nyaman  menggunakan aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q5)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="6"
                :span="3"
                label="Saya  merasa kesulitan  memahami dan menggunakan  aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q6)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="7"
                :span="3"
                label="Kapanpun dan dimanapun saya bisa menggunakan aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q7)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="8"
                :span="3"
                label="Penjelasan yang disampaikan diaplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini kurang jelas."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q8)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="9"
                :span="3"
                label="Petunjuk dan informasi dari setiap sesi yang ditampilkan dilayar aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini mudah dipahami."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q9)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="10"
                :span="3"
                label="Saya tidak dapat mengetahui keadaan emosi selama 2 mimggu  yang  disediakan diaplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q10)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="11"
                :span="3"
                label="Tampilan dari  aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini bagus dan menarik."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q11)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="12"
                :span="3"
                label="Proses pelaksanaan yang disediakan didalam aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini tidak efektif."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q12)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="13"
                :span="3"
                label="Saya menyukai aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini dan  merekomendasikan ke teman."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q13)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="14"
                :span="3"
                label="Aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini merupakan aplikasi yang  kurang bermanfaat."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q14)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item
                key="15"
                :span="3"
                label="Secara keseluruhan, saya puas dengan kemudahan pemakaian aplikasi Cognitive Behaviour Therapy (CBT) Berbasis Web ini."
              >
                <a-tag color="blue">
                  {{
                    (detail.Survey && convertSurvey(detail.Survey.q15)) || "-"
                  }}
                </a-tag>
              </a-descriptions-item>
            </a-descriptions>
          </a-collapse-panel>
        </a-collapse>
      </a-descriptions-item>
      <a-descriptions-item label="Skor Akhir Survey" :span="3">
        {{ detail.totalSurvey }}
      </a-descriptions-item>
    </a-descriptions>
    <div class="flex flex-row mt-4">
      <a-button @click="$router.back()" class="mr-4">
        <a-icon type="left" />Back
      </a-button>
    </div>
  </div>
</template>

<script>
import MainService from "@/services/resources/main.service";
import {
  Divider,
  Descriptions,
  Collapse,
  Tag,
  Button,
  Icon,
  Spin,
} from "ant-design-vue";

export default {
  components: {
    "a-divider": Divider,
    "a-descriptions": Descriptions,
    "a-descriptions-item": Descriptions.Item,
    "a-collapse": Collapse,
    "a-collapse-panel": Collapse.Panel,
    "a-tag": Tag,
    "a-button": Button,
    "a-icon": Icon,
    "a-spin": Spin,
  },
  data() {
    return {
      id: this.$route.params?.secureId,
      loading: false,
      expandAnxiety: [],
      expandDepresi: [],
      expandCBT: [],
      expandSurveys: [],
      detail: {
        name: null,
        username: null,
        Ansieta: {},
        Depresi: {},
        CBT_FirstSection: {
          situasi: null,
          pikiran: null,
          distorsi_pikiran: null,
          perasaan: null,
          tingkatan_perasaan: null,
          perilaku: null,
          konsekuensi: null,
          paling_mengganggu: null,
        },
        CBT_MainSection: {
          step_11: null,
          step_12: null,
          step_13: null,
          step_14: null,
          step_15: null,
          step_16: null,
          step_17: null,
          step_18: null,
          step_19: null,
          step_20: null,
        },
        CBT_PracticeSection: {
          step_21: null,
          step_22: null,
          step_23: null,
          step_24: null,
          step_25: null,
          step_26: null,
        },
        Identity: {
          additional_field: null,
          age: null,
          education: null,
          frequencies: null,
          gender: null,
          hospital_sheet: null,
          is_covid19: null,
          is_pregnant: null,
          job: null,
          marital_status: null,
          name: null,
        },
        Survey: {
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
        totalSurvey: null,
        totalAnsietas: 0,
        totalDepresi: 0,
      },
    };
  },
  methods: {
    checkColorTingkatanDep(e) {
      if (e.totalDepresi <= 9) return "green";
      else if (e.totalDepresi <= 14) return "yellow";
      else if (e.totalDepresi >= 19) return "red";
      return "green";
    },
    checkColorTingkatanAnx(e) {
      if (e.totalAnsietas <= 59) return "green";
      else if (e.totalAnsietas <= 74) return "yellow";
      else if (e.totalAnsietas >= 75) return "red";
      return "green";
    },
    convertDescTingkatanAnx(e) {
      if (e.totalAnsietas <= 59) return "Ringan";
      else if (e.totalAnsietas <= 74) return "Sedang";
      else if (e.totalAnsietas >= 75) return "Berat";
      return "Ringan";
    },
    convertDescTingkatanDep(e) {
      if (e.totalDepresi <= 9) return "Ringan";
      else if (e.totalDepresi <= 14) return "Sedang";
      else if (e.totalDepresi >= 19) return "Berat";
      return "Ringan";
    },
    checkColorStatus(e) {
      if (e.status == "sehat") return "green";
      else if (e.status == "gangguan psikotik") return "red";
      else if (e.status == "psikososial") return "blue";
      return "green";
    },
    convertStatus(e) {
      if (e.status == "psikososial") return "Masalah Psikososial";
      return e.status;
    },
    getDetail() {
      this.loading = true;
      MainService.getDetail(this.id)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            const CopiedSurvey = { ...result.Survey };
            this.detail = { ...result };
            if (result.Survey) {
              Object.entries(CopiedSurvey).map((e, i) => {
                if ((i + 1) % 2 == 0) {
                  switch (e[1]) {
                    case 1:
                      CopiedSurvey[e[0]] = 0;
                      break;
                    case 2:
                      CopiedSurvey[e[0]] = 1;
                      break;
                    case 3:
                      CopiedSurvey[e[0]] = 2;
                      break;
                    case 4:
                      CopiedSurvey[e[0]] = 3;
                      break;
                    case 5:
                      CopiedSurvey[e[0]] = 4;
                      break;
                  }
                } else {
                  CopiedSurvey[e[0]] = e[1] - 1;
                }
              });
              result.totalSurvey =
                Object.values(CopiedSurvey).reduce((c, p) => c + p) * 2.5;
              this.detail = {
                ...this.detail,
                totalSurvey: result.totalSurvey,
              };
            } else {
              this.detail = {
                ...this.detail,
                totalSurvey: 0,
              };
            }
          } else {
            this.$message.error(result || "Gagal memuat data responden", 2.5);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => (this.loading = false));
    },
    convertDescAnx(arg) {
      if (!arg) return "Tidak Pernah";
      else if (arg == 0) return "Tidak pernah";
      else if (arg == 1) return "Kadang-kadang";
      else if (arg == 2) return "Sering";
      else if (arg == 3) return "Selalu";
    },
    checkColorAnx(arg) {
      if (!arg) return "green";
      else if (arg == 0) return "green";
      else if (arg == 1) return "orange";
      else if (arg == 2) return "pink";
      else if (arg == 3) return "red";
    },
    checkColorDep(arg) {
      if (!arg) return "green";
      else if (arg == 1) return "green";
      else if (arg == 2) return "orange";
      else if (arg == 3) return "pink";
      else if (arg == 4) return "red";
    },
    convertDescDep(arg) {
      if (!arg) return "Tidak Pernah";
      else if (arg == 1) return "Tidak pernah";
      else if (arg == 2) return "Kadang-kadang";
      else if (arg == 3) return "Sering";
      else if (arg == 4) return "Selalu";
    },
    convertSurvey(arg) {
      if (!arg) return "Sangat Tidak Setuju";
      else if (arg == 1) return "Sangat Tidak Setuju";
      else if (arg == 2) return "Tidak Setuju";
      else if (arg == 3) return "Ragu-ragu";
      else if (arg == 4) return "Setuju";
      else if (arg == 5) return "Sangat Setuju";
    },
  },
  mounted() {
    this.id ? this.getDetail() : this.$router.back();
  },
  computed: {
    isMahasiswaOrNakes() {
      return (
        this.detail?.Identity?.job == "mahasiswa" ||
        this.detail?.Identity?.job == "perawat"
      );
    },
    isMahasiswa() {
      return this.detail?.Identity?.job == "mahasiswa";
    },
  },
};
</script>

<style>
.ant-descriptions-row
  > .ant-descriptions-item-label.ant-descriptions-item-colon {
  width: 30%;
}
</style>
