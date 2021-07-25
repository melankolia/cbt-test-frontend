<template>
  <a-layout-sider v-model="collapsingComp" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { Layout, Menu, Icon } from "ant-design-vue";

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
};
</script>

<style></style>
