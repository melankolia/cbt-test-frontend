<template>
  <a-layout
    id="components-layout-demo-custom-trigger"
    style="min-height: 100vh"
  >
    <SideBar
      :collapsed="collapsed"
      @setCollapsed="(event) => handleCollapsed(event)"
    />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
          <router-view />
        </div>
        <Table />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
const SideBar = () => import("./Sidebar");
const Table = () => import("../components/Table.vue");
import { Layout, Icon } from "ant-design-vue";

export default {
  components: {
    SideBar,
    Table,
    "a-layout": Layout,
    "a-layout-header": Layout.Header,
    "a-icon": Icon,
    "a-layout-content": Layout.Content,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleCollapsed(e) {
      this.collapsed = e;
    },
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
