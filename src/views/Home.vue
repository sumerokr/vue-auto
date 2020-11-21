<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Home</h1>

    <p>
      Don't have an account?
      <router-link class="text-blue-500" :to="{ name: 'Registration' }">
        Register</router-link
      >
    </p>
    <br />
    <p>
      Already registered?
      <router-link class="text-blue-500" :to="{ name: 'Login' }">
        Log in</router-link
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
