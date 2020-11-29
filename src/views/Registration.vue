<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Registration</h1>

    <p>
      Already registered?
      <router-link class="text-blue-700" :to="{ name: 'Login' }">
        Log in</router-link
      >
    </p>
    <br />

    <p>Type</p>
    <ul class="space-y-2">
      <li>
        <label class="block border-2 border-gray-200 p-2 rounded" for="personal"
          ><input type="radio" id="personal" name="type" value="personal" />
          Personal</label
        >
      </li>
      <li>
        <label class="block border-2 border-gray-200 p-2 rounded" for="company"
          ><input type="radio" id="company" name="type" value="company" />
          Company</label
        >
      </li>
    </ul>

    <br />

    <form @submit.prevent="onRegistration">
      <label for="email">Email</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="email"
        id="email"
      /><br /><br />

      <label for="password">Password</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="password"
        id="password"
      /><br /><br />

      <button
        class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
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
