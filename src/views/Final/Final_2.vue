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
    <div class="px-8 my-8">
      <p class="font-airbnb-medium text-3xl text-white">Anda Hebat</p>
      <p class="font-airbnb text-base text-white leading-snug my-8">
        Silahkan konsultasi permasalahan dan hambatan yang ditemukan dalam
        Latihan CBT ini
      </p>
      <p class="font-airbnb text-base text-white leading-snug my-4">
        Email : maryatunpsik@gmail
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
import { Button } from "ant-design-vue";
import { MAIN_PAGE } from "@/router/name.types";

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
    handleClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({ name: MAIN_PAGE });
      }, 1500);
    },
  },
};
</script>

<style></style>
