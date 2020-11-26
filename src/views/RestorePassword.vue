<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">RestorePassword</h1>

    <p>
      Back to
      <router-link class="text-blue-700" :to="{ name: 'Login' }">
        Log in</router-link
      >
    </p>

    <br />

    <form @submit.prevent="onRestore">
      <label for="email">Email</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="email"
        id="email"
      /><br /><br />

      <button
        class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
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
