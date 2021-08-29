<template>
  <div
    class="
      min-h-screen
      flex flex-col
      bg-green-500
      text-center
      justify-center
      items-center
    "
  >
    <div class="w-1/2 h-1/2 bg-white my-4 rounded-full animate-bounce">
      <a-icon class="text-9xl m-6 text-green-500" type="like" />
    </div>
    <div class="px-8 my-8">
      <p class="font-airbnb-medium text-3xl text-white">Sehat Jiwa</p>
      <p class="font-airbnb text-base text-white leading-snug my-8">
        “Anda tidak perlu ikut Terapi CBT” <br />
        Anda hanya perlu menjaga Kesehatan fisik.
      </p>
    </div>
    <div class="w-full px-8">
      <a-button
        :loading="loading"
        @click="handleClick"
        size="large"
        shape="round"
        block
      >
        <span class="font-airbnb-medium text-green-500">OK</span>
      </a-button>
    </div>
  </div>
</template>

<script>
import { MAIN_PAGE } from "@/router/name.types";
import { Icon, Button } from "ant-design-vue";

export default {
  components: {
    "a-icon": Icon,
    "a-button": Button,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
      setTimeout(() => {
        this.$router.replace({ name: MAIN_PAGE });
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style></style>
