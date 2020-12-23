<template>
  <div
    class="wrapper group relative z-10 mb-6"
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
    class="wrapper group relative z-10 mb-6"
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
    class="wrapper group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full border-b-2 rounded-t bg-gray-50 font-medium transition-all focus:border-blue-700 outline-none"
      style="padding: 18px 16px 0px"
      type="text"
      v-model="value"
    />
  </div>

  <div
    class="wrapper group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full border-b-2 rounded-t bg-gray-50 font-medium transition-all focus:border-blue-700 outline-none"
      style="padding: 21px 16px 1px"
      type="text"
      v-model="value"
    />
  </div>

  <div
    class="wrapper group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-1/2 left-3 text-black text-opacity-60 transform -translate-y-1/2"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full border-b-2 rounded-t bg-gray-50 font-medium transition-all focus:border-blue-700 outline-none"
      style="padding: 24px 16px 2px"
      type="text"
      v-model="value"
    />
  </div>

  <div
    class="wrapper group relative z-10 mb-6"
    :class="{ filled: value.trim() !== '' }"
  >
    <label
      class="label px-1 transition-all absolute top-0 left-3 text-black text-opacity-60 transform translate-y-4"
      for=""
      >Hello my darling</label
    >
    <input
      class="w-full border-b-2 rounded-t bg-gray-50 font-medium transition-all focus:border-blue-700 outline-none"
      style="padding: 26px 16px 4px"
      type="text"
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppInputAlt",

  setup: () => {
    const value = ref("");

    return {
      value,
    };
  },
});
</script>

<style scoped>
.label {
  font-weight: 500;
  line-height: 1.5rem;
}

.wrapper.filled .label,
.wrapper:focus-within .label {
  transform: translateY(0.25rem);
  font-size: 12px;
  line-height: 1rem;
  font-weight: 500;
}

.wrapper:focus-within .label {
  color: #1d4ed8;
}
</style>
