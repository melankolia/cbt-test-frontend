import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Ant Design Vue
import "ant-design-vue/dist/antd.css";
import { message, Modal } from "ant-design-vue";
Vue.prototype.$message = message;
Vue.use(Modal);

// Tailwind CSS
import "@/assets/css/tailwind.css";

// Vue Mixin
import "./mixins";

// Vue Filter
import "./filters/case.filter";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
