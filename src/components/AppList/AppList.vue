<template>
  <ul>
    <li>
      <span v-if="before" class="material-icons before">{{ before }}</span>
      <slot></slot>
      <span v-if="after" class="material-icons after">{{ after }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppList",

  props: {
    isBlock: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped></style>
