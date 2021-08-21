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
      <span slot="action" slot-scope="currentDataPage">
        <a @click="() => goToDetail(currentDataPage)">Detail</a>
      </span>
      <template slot="footer">
        <div class="flex flex-row justify-end">
          <a-pagination v-model="current" :total="20" show-less-items />
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import MainService from "@/services/resources/main.service";
import { Table, Input, Pagination, Divider } from "ant-design-vue";
import { mapGetters } from "vuex";
import { DASHBOARD_DETAIL } from "@/router/name.types";

const columns = [
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
    title: "Total Skor Ansietas",
    dataIndex: "totalAnsietas",
    key: "totalAnsietas",
  },
  {
    title: "Total Skor Depresi",
    dataIndex: "totalDepresi",
    key: "totalDepresi",
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
            this.data = [...result];
            this.totalItem = result.length;
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
