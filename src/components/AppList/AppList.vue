<template>
  <ul>
    <li>
      <button type="button">
        <span v-if="before" class="material-icons before">{{ before }}</span>
        <slot></slot>
        <span v-if="after" class="material-icons after">{{ after }}</span>
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppList",

  props: {},

  emits: {
    click: null,
  },
});
</script>

<style scoped></style>
