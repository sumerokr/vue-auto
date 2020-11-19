<template>
  <div class="flex border-b border-solid border-indigo-500 px-4">
    <nav id="nav" class="flex">
      <router-link class="p-2" to="/">Home</router-link>
      <router-link class="p-2" to="/cars">Cars</router-link>
      <router-link class="p-2" to="/service">Service</router-link>
    </nav>
    <router-link class="ml-auto p-2" to="/user">User</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<style scoped></style>
