<template>
  <component :is="FinalScreen" />
</template>

<script>
import { mapGetters } from "vuex";
const Final = () => import("@/views/Final/Final");
const Final_2 = () => import("@/views/Final/Final_2");

export default {
  components: {
    Final,
    Final_2,
  },
  computed: {
    ...mapGetters(["getFinalAnswer"]),
    FinalScreen() {
      return this.getFinalAnswer == "YA" ? "Final" : "Final_2";
    },
  },
};
</script>

<style></style>
