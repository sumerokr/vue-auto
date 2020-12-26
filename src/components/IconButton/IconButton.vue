<template>
  <button
    class="button flex items-start bg-black bg-opacity-0 active:bg-opacity-10 rounded-full"
    :class="{ 'is-dense': isDense }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconButton",

  props: {
    isDense: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.button {
  padding: 12px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  outline: none;
  transition: all 0.1s;
}

.button.is-dense {
  padding: 10px;
}
</style>
