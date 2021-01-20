<template>
  <div
    class="wrapper relative z-10"
    :class="{ filled: modelValue && modelValue.trim() !== '' }"
  >
    <select
      class="select w-full bg-white appearance-none px-3.5 py-2.5 border-2 rounded transition-all focus:border-blue-700 outline-none"
      v-bind="$attrs"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <slot />
    </select>
    <label
      class="label px-1 transition-all absolute z-10 top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      :for="$attrs.id"
      >{{ label }}</label
    >
    <span v-if="!loading" class="arrow material-icons">expand_more</span>
    <span v-if="loading" class="loader material-icons">refresh</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppSelect",

  inheritAttrs: false,

  props: ["modelValue", "label", "loading"],
  emits: ["update:modelValue"],
});
</script>

<style scoped>
.label {
  pointer-events: none;
}

.wrapper.filled .label,
.wrapper:focus-within .label {
  top: 1px;
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: #fff;
  cursor: default;
  pointer-events: all;
}

.wrapper:focus-within .label {
  color: #1d4ed8;
}

.select:disabled {
  opacity: 0.5;
}

.select:disabled ~ .label {
  color: var(--color-text-mute);
}

.arrow,
.loader {
  position: absolute;
  z-index: 1;
  right: 12px;
  top: calc(50% - 12px);
  color: var(--color-text-quite);
  pointer-events: none;
}

.select:disabled ~ .arrow,
.select:disabled ~ .loader {
  color: var(--color-text-mute);
}

.loader {
  animation: rotate 500ms infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
