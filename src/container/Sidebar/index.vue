<template>
  <a-layout-sider
    v-model="collapsingComp"
    :trigger="null"
    collapsible
    width="240"
  >
    <div class="flex flex-col align-center items-center">
      <img src="@/assets/images/unsri.png" alt="unsri" />
      <p
        v-show="!collapsed"
        class="font-airbnb-medium text-2xl text-white my-4"
      >
        Dashboard CBT
      </p>
    </div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item @click="handleBrowse" key="1">
        <a-icon type="search" />
        <span>Browse Data</span>
      </a-menu-item>
    </a-menu>
    <div v-show="!collapsed" class="flex flex-row mx-6 my-10">
      <a-button @click="handleLogout" type="danger" :loading="loading" block>
        <a-icon type="left" />Logout
      </a-button>
    </div>
  </a-layout-sider>
</template>

<script>
import { DASHBOARD, LOGIN } from "@/router/name.types";
import { Layout, Menu, Icon, Button } from "ant-design-vue";
import { mapActions } from "vuex";

export default {
  props: {
    collapsed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    "a-layout-sider": Layout.Sider,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-icon": Icon,
    "a-button": Button,
  },
  data() {
    return { loading: false };
  },
  computed: {
    collapsingComp: {
      get() {
        return this.collapsed;
      },
      set() {
        this.$emit("setCollapsed", !this.collapsed);
      },
    },
  },
  methods: {
    ...mapActions(["forceLogout"]),
    handleBrowse() {
      this.$router.replace({ name: DASHBOARD });
    },
    handleLogout() {
      this.logout(() => {
        this.forceLogout()
          .then(() => {
            this.$router.replace({ name: LOGIN });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
    logout(callback) {
      this.$confirm({
        title: "Logout ?",
        content: "Are you sure, you want to Logout ?",
        onOk() {
          callback();
        },
        onCancel() {},
      });
    },
  },
};
</script>

<style></style>
