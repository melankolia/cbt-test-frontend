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
      <a-icon class="text-9xl m-6 text-green-500" type="smile" />
    </div>
    <div class="px-8 my-8">
      <p class="font-airbnb-medium text-3xl text-white">Anda Hebat</p>
      <p class="font-airbnb text-base text-white leading-snug my-8">
        Silahkan konsultasi permasalahan dan hambatan yang ditemukan dalam
        Latihan CBT ini
      </p>
      <p class="font-airbnb text-base text-white leading-snug my-4">
        Email : maryatunpsik@gmail.com
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
import { Icon, Button } from "ant-design-vue";
import { SURVEY_IDENTITIES } from "@/router/name.types";

export default {
  components: {
    "a-button": Button,
    "a-icon": Icon,
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
        this.loading = false;
        this.$router.push({ name: SURVEY_IDENTITIES });
      }, 1500);
    },
  },
};
</script>

<style></style>
