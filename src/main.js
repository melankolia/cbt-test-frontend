import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import { Modal } from "ant-design-vue";

// Tailwind CSS
import "@/assets/css/tailwind.css";

// Vue Mixin
import "./mixins";

// Vue Filter
import "./filters/case.filter";

Vue.config.productionTip = false;

Vue.use(Modal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
