<template>
  <button
    class="flex items-start p-3 bg-black bg-opacity-5 focus:bg-opacity-20 focus:outline-none rounded"
    style="tap-highlight-color: rgba(255, 255, 255, 0)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconButton",
});
</script>
