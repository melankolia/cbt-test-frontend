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
      <p class="font-airbnb-medium text-3xl text-white">Anda Cerdas</p>
      <p class="font-airbnb text-base text-white leading-snug my-8">
        Kejujuranmu adalah awal dari suatu pencapaian diri yang baik menuju
        kebahagiaan hidup
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
        <span class="font-airbnb-medium text-green-500">Latihan CBT</span>
      </a-button>
    </div>
  </div>
</template>

<script>
import { Icon, Button } from "ant-design-vue";
import { MAIN_CBT } from "@/router/name.types";

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
        this.loading = false;
        this.$router.push({ name: MAIN_CBT });
      }, 1500);
    },
  },
};
</script>

<style></style>
