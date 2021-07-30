<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Step 2</p>
    <p class="font-airbnb-light mt-2 mb-4">
      Apa yang anda pikirkan mengenai kejadian itu?
    </p>
    <a-textarea
      placeholder="Dia tidak mau menyapa saya karena dia benci saya"
      :auto-size="{ minRows: 4 }"
    />
  </div>
</template>

<script>
import { Input } from "ant-design-vue";

export default {
  components: {
    "a-textarea": Input.TextArea,
  },
};
</script>

<style></style>
