<template>
  <div class="flex flex-col">
    <p class="font-airbnb-medium text-2xl">Browse Data Responden</p>
    <a-divider></a-divider>
    <div class="mt-4 mb-8">
      <a-input-search placeholder="Search" enter-button @search="onSearch" />
    </div>
    <a-table
      :loading="loading"
      :columns="columns"
      :data-source="data"
      :pagination="false"
      rowKey="username"
    >
      <span slot="status" slot-scope="currentDataPage">
        <a-tag :color="checkColorStatus(currentDataPage)">
          {{ convertStatus(currentDataPage) || "-" | toTitle }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="currentDataPage">
        <a @click="() => goToDetail(currentDataPage)">Detail</a>
      </span>
      <span slot="tingkatanDepresi" slot-scope="currentDataPage">
        <a-tag :color="checkColorDep(currentDataPage)">
          {{ convertDescDep(currentDataPage) }}
        </a-tag>
      </span>
      <span slot="tingkatanAnsietas" slot-scope="currentDataPage">
        <a-tag :color="checkColorAnx(currentDataPage)">
          {{ convertDescAnx(currentDataPage) }}
        </a-tag>
      </span>
      <template slot="footer">
        <div class="flex flex-row justify-end">
          <a-pagination v-model="current" :total="totalItem" show-less-items />
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import MainService from "@/services/resources/main.service";
import { Table, Input, Pagination, Divider, Tag } from "ant-design-vue";
import { mapGetters } from "vuex";
import { DASHBOARD_DETAIL } from "@/router/name.types";

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Ansietas",
    scopedSlots: { customRender: "tingkatanAnsietas" },
    key: "tingkatanAnsietas",
  },
  {
    title: "Total Skor Ansietas",
    dataIndex: "totalAnsietas",
    key: "totalAnsietas",
    align: "center",
  },
  {
    title: "Depresi",
    key: "tingkatanDepresi",
    scopedSlots: { customRender: "tingkatanDepresi" },
  },
  {
    title: "Total Skor Depresi",
    dataIndex: "totalDepresi",
    key: "totalDepresi",
    align: "center",
  },
  {
    title: "Status",
    scopedSlots: { customRender: "status" },
    key: "status",
    align: "center",
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

export default {
  components: {
    "a-input-search": Input.Search,
    "a-table": Table,
    "a-pagination": Pagination,
    "a-tag": Tag,
    "a-divider": Divider,
  },
  data() {
    return {
      search: "",
      data: [],
      columns,
      loading: false,
      current: 1,
      totalItem: 10,
    };
  },
  methods: {
    onSearch(e) {
      this.current = 1;
      this.search = e;
    },
    goToDetail(e) {
      this.$router.push({
        name: DASHBOARD_DETAIL,
        params: {
          secureId: e.id,
        },
      });
    },
    getList() {
      this.loading = true;
      MainService.getList({
        search: this.search,
        page: this.current,
      })
        .then(({ data: { result, message } }) => {
          if (message === "OK") {
            this.data = [...result.rows];
            result.rows.map((data, index) => {
              data.no = 10 * (this.current - 1) + (index + 1);
              return data;
            });
            this.totalItem = result.count;
          } else {
            this.$message.error(result || "Gagal memuat data responden", 2.5);
          }
        })
        .catch((err) => {
          console.error(err);
          this.$message.error("Gagal memuat data responden", 2.5);
        })
        .finally(() => (this.loading = false));
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
    checkColorDep(e) {
      if (e.totalDepresi <= 9) return "green";
      else if (e.totalDepresi <= 14) return "yellow";
      else if (e.totalDepresi >= 19) return "red";
      return "green";
    },
    checkColorAnx(e) {
      if (e.totalAnsietas <= 44) return "green";
      else if (e.totalAnsietas <= 59) return "yellow";
      else if (e.totalAnsietas >= 74) return "red";
      return "green";
    },
    convertDescAnx(e) {
      if (e.totalAnsietas <= 44) return "Ringan";
      else if (e.totalAnsietas <= 59) return "Sedang";
      else if (e.totalAnsietas >= 74) return "Berat";
      return "Ringan";
    },
    convertDescDep(e) {
      if (e.totalDepresi <= 9) return "Ringan";
      else if (e.totalDepresi <= 14) return "Sedang";
      else if (e.totalDepresi >= 19) return "Berat";
      return "Ringan";
    },
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  watch: {
    current(val) {
      val > 0 && this.getList();
    },
    search() {
      this.getList();
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style></style>
