import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { LOGIN, DASHBOARD } from "@/router/name.types";
import { FORCE_LOGOUT } from "@/store/constants/actions.type";

// Ant Design Vue
import "ant-design-vue/dist/antd.css";
import { message, Modal } from "ant-design-vue";
Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
Vue.use(Modal);

// Tailwind CSS
import "@/assets/css/tailwind.css";

// Vue Mixin
import "./mixins";

// Vue Filter
import "./filters/case.filter";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // Authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isAuthenticated) {
      store.dispatch(FORCE_LOGOUT).then(() => {
        next({
          name: LOGIN,
        });
        setTimeout(function () {
          this.$message.error(
            "Token Expired, Sorry You Must Login Again!",
            2.5
          );
        }, 500);
      });
    } else if (to.name == DASHBOARD) {
      if (store.getters.getUser.username == "Admin") {
        next();
      } else {
        next({
          name: LOGIN,
        });
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
