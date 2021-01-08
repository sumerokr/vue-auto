<template>
  <button
    class="icon-button flex items-start bg-black bg-opacity-0 active:bg-opacity-10 rounded-full"
    :class="`theme-${theme}`"
  >
    <span class="icon material-icons">{{ icon }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconButton",

  props: {
    icon: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "dark",
    },
  },
});
</script>

<style scoped>
.icon-button {
  padding: 12px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  transition: all 0.1s;
}

.theme-light .icon {
  color: rgba(255, 255, 255, 0.7);
}

.theme-dark .icon {
  color: var(--color-text-quite);
}
</style>
