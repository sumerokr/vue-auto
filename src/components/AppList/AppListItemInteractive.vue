<template>
  <li class="item">
    <button
      class="button"
      :class="{ 'has-before': $slots.before, 'has-after': $slots.after }"
      type="button"
      @click="$emit('click-button')"
    >
      <slot></slot>
    </button>
    <div
      v-if="$slots.before"
      class="before"
      :class="{ 'is-interactive': interactive.includes('before') }"
    >
      <slot name="before"></slot>
    </div>
    <div
      v-if="$slots.after"
      class="after"
      :class="{ 'is-interactive': interactive.includes('before') }"
    >
      <slot name="after"></slot>
    </div>
    <slot name="nested"></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppListItemInteractive",

  props: {
    interactive: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.item {
  position: relative;
  z-index: 1;
}

.button {
  display: block;
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  transition: all 0.1s;
}

.button.has-before {
  padding-left: 72px;
}

.button.has-after {
  padding-right: 72px;
}

.button:focus {
  outline: none;
}

.button:active {
  background-color: #d1d5db;
}

.before,
.after {
  position: absolute;
  z-index: 1;
  top: 0;
  pointer-events: none;
}

.before.is-interactive,
.after.is-interactive {
  pointer-events: all;
}

.before {
  left: 0;
}

.after {
  right: 0;
}
</style>
