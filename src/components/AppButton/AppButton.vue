<template>
  <button
    class="button"
    :type="type"
    :class="`size-${size} appearance-${appearance} ${
      isBlock ? 'is-block' : ''
    }`"
  >
    <span class="material-icons before">{{ before }}</span>
    <div v-if="$slots.before" class="before"><slot name="before"></slot></div>
    <slot></slot>
    <div v-if="$slots.before" class="after"><slot name="after"></slot></div>
    <span class="material-icons after">{{ after }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButton",

  props: {
    isBlock: {
      type: Boolean,
      default: false,
    },
    appearance: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "36",
    },
    before: {
      type: String,
      default: "",
    },
    after: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
  },
});
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  transition: all 0.1s;
}

.button:focus {
  outline: none;
}

.is-block {
  width: 100%;
}

.button.size-48 {
  padding: 12px 16px;
  font-size: 16px;
}

.button.appearance-default {
  color: var(--text-color-primary);
  background-color: #f3f4f6;
}

.button.appearance-default:active {
  background-color: #d1d5db;
}

.button.appearance-primary {
  color: rgba(255, 255, 255, 0.9);
  background-color: #1d4ed8;
}

.button.appearance-primary:active {
  background-color: #1e3a8a;
}

.button.appearance-secondary {
  background-color: #eff6ff;
}

.button.appearance-secondary:active {
  background-color: #bfdbfe;
}

.appearance-primary .before,
.appearance-primary .after {
  color: rgba(255, 255, 255, 0.7);
}

.appearance-secondary .before,
.appearance-secondary .after {
  color: var(--color-text-quite);
}

.before {
  margin-right: 8px;
  margin-left: -4px;
}

.after {
  margin-right: -4px;
  margin-left: 8px;
}

.size-36 .before,
.size-36 .after {
  font-size: 20px;
}

.size-48 .before,
.size-48 .after {
  font-size: 24px;
}
</style>
