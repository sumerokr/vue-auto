<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cars">Cars</router-link> |
    <router-link to="/service">Service</router-link>
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
