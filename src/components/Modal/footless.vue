<template>
  <a-modal
    v-model="visible"
    :title="title"
    :maskClosable="false"
    :footer="null"
  >
    <slot name="content"></slot>
  </a-modal>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, required: true, default: false },
    title: { type: String, required: true, default: "Title" },
  },
};
</script>

<style></style>
