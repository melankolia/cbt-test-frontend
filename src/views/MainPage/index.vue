<template>
  <div class="min-h-screen flex flex-col">
    <div class="home-style px-6 pt-6">
      <!-- <div class="flex flex-row justify-between align-center">
        <a-avatar shape="circle" size="large" icon="user" />
        <a-button shape="circle" size="large" icon="menu" type="primary" />
      </div> -->
      <p
        class="
          font-airbnb-bold
          text-3xl
          bg-blend-color
          mt-14
          mb-0
          text-center text-white
          bg-primary
          p-4
          rounded-md
        "
      >
        Beranda CBT
      </p>
      <img class="mt-6" src="@/assets/images/doctor.jpg" alt="beranda-cbt" />
    </div>
    <div class="m-6">
      <p class="font-airbnb-light text-xl bg-blend-color mb-0">Hello,</p>
      <p class="font-airbnb-bold text-2xl bg-blend-color mb-6">Jessika</p>
      <div class="flex flex-col space-y-4">
        <div
          class="
            bg-primary
            active:bg-white
            rounded-lg
            p-4
            flex flex-row
            items-center
          "
          @click="goToAnxiety"
        >
          <img
            class="mr-8"
            width="32pd"
            height="32px"
            src="@/assets/images/anxiety.png"
            alt="anxiety"
          />
          <p class="font-airbnb-medium text-lg text-white m-0">
            Skala Ansietas
          </p>
        </div>
        <div
          class="
            bg-primary
            active:bg-white
            rounded-lg
            p-4
            flex flex-row
            items-center
          "
          @click="goToDepression"
        >
          <img
            class="mr-8"
            width="32pd"
            height="32px"
            src="@/assets/images/depression.png"
            alt="anxiety"
          />
          <p class="font-airbnb-medium text-lg text-white m-0">Skala Depresi</p>
        </div>
        <div
          class="
            bg-primary
            active:bg-white
            rounded-lg
            p-4
            flex flex-row
            items-center
          "
          @click="goToCBT"
        >
          <img
            class="mr-8"
            width="32px"
            height="32px"
            src="@/assets/images/clipboard.png"
            alt="clipboard"
          />
          <p class="font-airbnb-medium text-lg text-white m-0">Sesi CBT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Avatar, Button } from "ant-design-vue";
import { ANXIETY, DEPRESSION, FIRST_CBT } from "@/router/name.types";

export default {
  // components: {
  //   "a-avatar": Avatar,
  //   "a-button": Button,
  // },
  methods: {
    goToAnxiety() {
      this.$router.push({ name: ANXIETY });
    },
    goToDepression() {
      this.$router.push({ name: DEPRESSION });
    },
    goToCBT() {
      this.$router.push({ name: FIRST_CBT });
    },
  },
};
</script>

<style scoped>
.home-style {
  background: white;
}
</style>
