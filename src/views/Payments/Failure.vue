<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Payment failure</h1>

    <p class="text-center">
      <i class="material-icons-outlined text-9xl text-red-400">error</i>
    </p>
    <br />
    <p class="text-center">
      You can
      <router-link class="text-blue-700" :to="{ name: 'Pricing' }"
        >try again</router-link
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaymentFailure",
});
</script>
