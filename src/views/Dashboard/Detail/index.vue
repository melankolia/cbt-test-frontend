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
                label="Bukti atau pengalaman apa yang mendukung munculnya pikiran negatifmu ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_11 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="12"
                :span="3"
                label="Apa yang akan anda katakan ke teman dekatmu jika dia berpikir hal negative yang sama denganmu"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_12 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="13"
                :span="3"
                label="Apakah ada penjelasan lainnya untuk situasi atau pikiran tersebut ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_13 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="14"
                :span="3"
                label="Apa yang akan dikatakan teman dekatmu ketika anda tidak bisa menemukan bukti untuk melawan atau mengubah pikiran negative yang muncul tersebut ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_14 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="15"
                :span="3"
                label="Apa pengalaman positif yang kamu punya untuk membantu melawan pikiran negatif mu yang tidak benar ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_15 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="16"
                :span="3"
                label="Apakah ada bukti tambahan dari pengalaman positif yang pernah anda alami untuk melawan dan mengubah pikiran negative tersebut ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_16 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="17"
                :span="3"
                label="Coba bandingkan bukti yang mendukung pikiran negatifmu dengan bukti yang menentang pikiran negatifmu? Apa kesimpulanmu ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_17 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="18"
                :span="3"
                label="Lihat kembali Latihan CBT yang sudah dikerjakan, Tuliskan dan ucapkan dengan lantang pikiran positif untuk menggantikan pikiran negatif tersebut ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_18 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="19"
                :span="3"
                label="Bagaimana perasaanmu sekarang ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_19 }}
              </a-descriptions-item>
              <a-descriptions-item
                key="20"
                :span="3"
                label="Bagaimana tingkat perasaanmu sekarang ?"
              >
                {{ detail.CBT_FirstSection && detail.CBT_MainSection.step_20 }}
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
        totalAnsietas: 0,
        totalDepresi: 0,
      },
    };
  },
  methods: {
    getDetail() {
      this.loading = true;
      MainService.getDetail(this.id)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.detail = { ...result };
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
  },
  mounted() {
    this.id ? this.getDetail() : this.$router.back();
  },
};
</script>

<style>
.ant-descriptions-row
  > .ant-descriptions-item-label.ant-descriptions-item-colon {
  width: 30%;
}
</style>
