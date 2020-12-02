<template>
  <!-- <AppNav /> -->
  <AppBarTop
    @click="
      () => {
        isNavVisible = !isNavVisible;
      }
    "
  /><transition name="slide">
    <NavigationDrawer
      v-if="isNavVisible"
      @click="
        () => {
          isNavVisible = !isNavVisible;
        }
      "
  /></transition>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import AppNav from "@/components/AppNav/AppNav.vue";
import AppBarTop from "@/components/AppBarTop/AppBarTop.vue";
import NavigationDrawer from "@/components/NavigationDrawer/NavigationDrawer.vue";

export default defineComponent({
  name: "App",

  components: {
    // AppNav,
    NavigationDrawer,
    AppBarTop,
  },

  setup: () => {
    const isNavVisible = ref(false);

    return {
      isNavVisible,
    };
  },
});
</script>

<style>
.slide-enter-active {
  transition: transform 0.2s ease-out;
}
.slide-leave-active {
  transition: transform 0.2s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
