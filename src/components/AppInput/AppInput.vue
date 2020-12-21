<template>
  <div
    class="wrapper w-1/2 group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full px-3.5 py-1 border-2 rounded transition-all focus:border-blue-700 outline-none"
      type="text"
      v-model="value"
    />
  </div>

  <div
    class="wrapper w-1/2 group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full px-3.5 py-1.5 border-2 rounded transition-all focus:border-blue-700 outline-none"
      type="text"
      v-model="value"
    />
  </div>

  <div
    class="wrapper w-1/2 group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full px-3.5 py-2 border-2 rounded transition-all focus:border-blue-700 outline-none"
      type="text"
      v-model="value"
    />
  </div>

  <div
    class="wrapper w-1/2 group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full px-3.5 py-2.5 border-2 rounded transition-all focus:border-blue-700 outline-none"
      type="text"
      v-model="value"
    />
  </div>

  <div
    class="wrapper w-1/2 group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full px-3.5 py-3 border-2 rounded transition-all focus:border-blue-700 outline-none"
      type="text"
      v-model="value"
    />
  </div>

  <div
    class="wrapper w-1/2 group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full px-3.5 py-3.5 border-2 rounded transition-all focus:border-blue-700 outline-none"
      type="text"
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppInput",

  setup: () => {
    const value = ref("");

    return {
      value,
    };
  },
});
</script>

<style scoped>
.wrapper.filled .label,
.wrapper:focus-within .label {
  top: 1px;
  font-size: 12px;
  font-weight: 500;
  color: #1d4ed8;
  background-color: #fff;
}
</style>
