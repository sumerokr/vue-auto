<template>
  <div
    class="wrapper relative z-10"
    :class="{ filled: modelValue && modelValue.trim() !== '' }"
  >
    <label class="label" :for="$attrs.id">{{ label }}</label>
    <select
      class="select"
      v-bind="$attrs"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <slot />
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppSelectAlt",

  inheritAttrs: false,

  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
});
</script>

<style scoped>
.label {
  position: absolute;
  z-index: 1;
  top: 4px;
  left: 16px;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text-quite);
  transform: translateY(8px);
  transition: all 0.1s;
  pointer-events: none;
}

.wrapper.filled .label,
.wrapper:focus-within .label {
  font-size: 12px;
  line-height: 16px;
  cursor: default;
  transform: translateY(0px);
}

.wrapper:focus-within .label {
  color: #1d4ed8;
}

.select {
  appearance: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px 4px 0 0;
  padding: 20px 16px 2px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.06);
  outline: none;
}

select:focus {
  border-color: #1d4ed8;
}
</style>
