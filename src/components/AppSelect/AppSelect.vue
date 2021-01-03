<template>
  <div
    class="wrapper relative z-10"
    :class="{ filled: modelValue && modelValue.trim() !== '' }"
  >
    <label
      class="label px-1 font-medium transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      :for="$attrs.id"
      >{{ label }}</label
    >
    <select
      class="w-full bg-white appearance-none px-3.5 py-2.5 border-2 rounded transition-all focus:border-blue-700 outline-none"
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
  name: "AppSelect",

  inheritAttrs: false,

  props: ["modelValue", "label"],
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
</style>
