<template>
  <div class="text-center my-4">
    <p class="font-airbnb-medium text-base my-2">Step 3</p>
    <p class="font-airbnb-light mt-2 mb-4">Apa Lagi Yang Kamu pikirkan?</p>
    <a-textarea
      placeholder="Contoh : Dia marah kesaya karena saya pernah menabrak motornya.Saya memang orang paling ceroboh "
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
