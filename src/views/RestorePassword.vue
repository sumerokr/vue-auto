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

    <form class="grid gap-4" @submit.prevent="onRestore">
      <AppInput
        v-model="email"
        type="email"
        label="Email"
        id="email"
        required
      />

      <AppButton size="48" appearance="primary">Restore</AppButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppButton from "@/components/AppButton/AppButton.vue";

export default defineComponent({
  name: "RestorePassword",

  components: {
    AppInput,
    AppButton,
  },

  setup: () => {
    const email = ref("");

    return {
      email,
      onRestore: () => {
        alert("Restore password attempt");
      },
    };
  },
});
</script>
