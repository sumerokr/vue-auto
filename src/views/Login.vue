<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Login</h1>

    <p>
      Don't have an account?
      <router-link class="text-blue-500" :to="{ name: 'Registration' }">
        Register</router-link
      >
    </p>
    <br />

    <form @submit.prevent="onLogin">
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
      /><br />
      <p class="mt-2">
        Forgot password?
        <router-link class="text-blue-500" :to="{ name: 'RestorePassword' }">
          Restore</router-link
        >
      </p>
      <br />
      <br />

      <button
        class="bg-blue-500 text-white px-4 py-3 rounded text-opacity-90"
        type="submit"
      >
        Log in
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",

  setup: () => {
    return {
      onLogin: () => {
        alert("Log in attempt");
      },
    };
  },
});
</script>
