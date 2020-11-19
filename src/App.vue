<template>
  <AppNav />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNav from "@/components/AppNav/AppNav.vue";

export default defineComponent({
  name: "App",

  components: {
    AppNav,
  },
});
</script>

<style></style>
