<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">RestorePassword</h1>

    <form @submit.prevent="onRestore">
      <label for="email">Email</label><br />
      <input
        class="border border-gray-200 p-2 w-full"
        type="email"
        id="email"
      /><br /><br />

      <button
        class="bg-blue-500 text-white px-4 py-3 rounded text-opacity-90"
        type="submit"
      >
        Restore
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestorePassword",

  setup: () => {
    return {
      onRestore: () => {
        alert("Restore password attempt");
      },
    };
  },
});
</script>
