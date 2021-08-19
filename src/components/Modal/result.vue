<template>
  <a-modal
    v-model="visible"
    :title="title"
    :maskClosable="false"
    on-ok="handleOk"
  >
    <template slot="footer">
      <div class="flex flex-row justify-center items-center">
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
          block
          size="large"
        >
          Latihan CBT
        </a-button>
      </div>
    </template>
    <div
      class="
        rounded-full
        w-40
        h-40
        flex flex-col
        justify-center
        items-center
        mx-auto
      "
      :class="{
        'bg-green-500': status == 'ringan',
        'bg-yellow-300': status == 'sedang',
        'bg-red-600': status == 'berat',
      }"
    >
      <img
        width="128"
        src="@/assets/images/cloud/tinggi.png"
        alt="result-cloud"
        v-if="status == 'berat'"
      />
      <img
        width="128"
        src="@/assets/images/cloud/rendah.png"
        alt="result-cloud"
        v-else-if="status == 'ringan'"
      />
      <img
        width="128"
        src="@/assets/images/cloud/sedang.png"
        alt="result-cloud"
        v-else
      />
    </div>
    <div class="mx-auto text-center my-4">
      <p class="font-airbnb-medium text-2xl mb-0 underline">
        {{ status | toTitle }}
      </p>
    </div>
  </a-modal>
</template>

<script>
import { Button } from "ant-design-vue";

export default {
  components: {
    "a-button": Button,
  },
  props: {
    visible: { type: Boolean, required: true, default: false },
    title: { type: String, required: true, default: "Title" },
    handleCancel: { type: Function, required: true, default: () => {} },
    handleOk: { type: Function, required: true, default: () => {} },
    loading: { type: Boolean, required: true, default: false },
    status: { type: String, required: true, default: "sedang" },
  },
};
</script>

<style></style>
