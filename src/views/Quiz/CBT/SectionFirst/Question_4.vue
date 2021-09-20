<template>
  <div class="text-center my-4">
    <p class="font-airbnb-light text-base my-2">Step 4</p>
    <p class="font-airbnb-medium mt-2 mb-4">
      Apakah kamu mempunyai pikiran negatif lainnya
    </p>
    <div class="flex flex-row space-x-8 my-10">
      <a-button
        @click="$emit('handlePop')"
        size="large"
        class="rounded-full"
        block
        type="primary"
      >
        <span class="font-airbnb">Ya</span>
      </a-button>
      <a-button
        @click="$emit('handleNext')"
        size="large"
        block
        class="mb-2 rounded-full"
      >
        <span class="font-airbnb">Tidak</span>
      </a-button>
    </div>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";

export default {
  components: {
    "a-button": Button,
  },
};
</script>

<style></style>
