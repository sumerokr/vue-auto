<template>
  <h2 class="text-2xl mb-6">Success</h2>

  <p class="text-center">
    <i class="material-icons text-9xl text-green-400">check_circle</i>
  </p>

  <br />

  <p class="text-center">
    Back to
    <router-link class="text-blue-700" :to="{ name: 'Home' }">Home</router-link>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddSuccess",

  components: {},

  setup: () => {
    //
  },
});
</script>

<style></style>
