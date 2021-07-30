<template>
  <a-modal
    v-model="visible"
    :title="title"
    :closable="false"
    :maskClosable="false"
    on-ok="handleOk"
  >
    <template slot="footer">
      <a-button
        key="submit"
        type="primary"
        :loading="loading"
        @click="handleOk"
      >
        Submit
      </a-button>
    </template>
    <slot name="content"></slot>
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
  },
};
</script>

<style></style>
