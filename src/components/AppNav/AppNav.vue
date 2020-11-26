<template>
  <div class="flex border-b-2 border-solid border-blue-700 px-4">
    <nav id="nav" class="flex">
      <router-link class="p-3" to="/">Home</router-link>
      <router-link class="p-3" to="/pages">Pages</router-link>
    </nav>
    <router-link class="ml-auto p-3" to="/user">User</router-link>
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
