<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppSearch",

  components: {},

  props: {},

  emits: ["close"],

  setup: () => {
    return {};
  },
});
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 90;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  border-radius: 4px;
  padding: 16px;
  max-width: 80vw;
  max-height: 80vh;
  background-color: #fff;
}
</style>
