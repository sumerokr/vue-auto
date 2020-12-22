<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Login</h1>

    <form class="grid gap-4" @submit.prevent="login">
      <p>
        Don't have an account?
        <router-link class="text-blue-700" :to="{ name: 'Registration' }">
          Register</router-link
        >
      </p>

      <AppInput
        v-model="email"
        type="email"
        label="Email"
        id="email"
        required
      />

      <AppInput
        v-model="password"
        type="password"
        label="Password"
        id="password"
        required
      />

      <p>
        Forgot password?
        <router-link class="text-blue-700" :to="{ name: 'RestorePassword' }">
          Restore</router-link
        >
      </p>

      <button
        class="bg-blue-700 text-white px-4 py-3 rounded text-opacity-90 font-medium"
        type="submit"
      >
        Log in
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";

export default defineComponent({
  name: "Login",

  components: {
    AppInput,
  },

  setup: () => {
    const email = ref("");
    const password = ref("");

    const register = async () => {
      try {
        const response = await fetch("https://example.com/api/v1/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
        }).then((res) => res.json());
        alert("success! see console for details");
        console.log(response);
      } catch (error) {
        alert("failure! see console for details");
        console.log(error);
      }
    };

    return {
      email,
      password,
      register,
    };
  },
});
</script>
