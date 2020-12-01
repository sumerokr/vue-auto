<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Payment success</h1>

    <p class="text-center">
      <i class="material-icons text-9xl text-green-400">check_circle</i>
    </p>
    <br />
    <p class="text-center">
      Back to
      <router-link class="text-blue-700" :to="{ name: 'User' }"
        >Profile</router-link
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaymentSuccess",
});
</script>
