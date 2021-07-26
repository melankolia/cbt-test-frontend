<template>
  <div class="container-landing flex flex-col justify-between pt-20 pb-10">
    <div>
      <p class="font-airbnb-bold text-3xl bg-blend-color mb-0">
        Welcome to CBT
      </p>
      <p class="font-airbnb-light mb-0">(Cognitive Behaviour Therapy)</p>
      <p class="font-airbnb-light mb-0">Terapi Kognitif Perilaku</p>
      <img
        class="my-20 mx-auto"
        width="90%"
        src="@/assets/images/landing-page.jpg"
        alt="logo"
      />
    </div>
    <div class="px-10">
      <a-button
        @click="handleLogin"
        class="my-4"
        shape="round"
        block
        size="large"
        :loading="loading"
      >
        <span class="font-airbnb-medium tracking-wider">Login </span>
      </a-button>
      <p class="font-airbnb-light text-xs mb-1">&copy; Tahun 2021</p>
      <p class="font-airbnb-light text-xs">Created By Sri Maryatun</p>
    </div>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
import { LOGIN } from "@/router/name.types";

export default {
  components: {
    "a-button": Button,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({ name: LOGIN });
      }, 1500);
    },
  },
};
</script>

<style scoped>
.container-landing {
  min-height: 100vh;
  background: #bbe3f2;
  text-align: center;
}
</style>
