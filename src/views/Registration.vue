<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Registration</h1>

    <p>
      Already registered?
      <router-link class="text-blue-500" :to="{ name: 'Login' }">
        Log in</router-link
      >
    </p>
    <br />

    <form @submit.prevent="onRegistration">
      <label for="email">Email</label><br />
      <input
        class="border border-gray-200 p-2 w-full"
        type="email"
        id="email"
      /><br /><br />

      <label for="password">Password</label><br />
      <input
        class="border border-gray-200 p-2 w-full"
        type="password"
        id="password"
      /><br /><br />

      <button
        class="bg-blue-500 text-white px-4 py-3 rounded text-opacity-90"
        type="submit"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Registration",

  setup: () => {
    return {
      onRegistration: () => {
        alert("Registration attempt");
      },
    };
  },
});
</script>
