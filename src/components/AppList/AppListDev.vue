<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppListDev",

  props: {
    list: {
      type: Array,
      required: true,
    },
    key: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    before: {
      type: String,
    },
    after: {
      type: String,
    },
  },
});
</script>

<style scoped></style>
