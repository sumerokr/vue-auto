<template>
  <!-- <AppNav /> -->
  <AppBarTop @click="isNavVisible = true" /><transition name="slide">
    <NavigationDrawer v-if="isNavVisible" @click="isNavVisible = false"
  /></transition>
  <transition name="fade">
    <div
      v-if="isNavVisible"
      class="fixed z-40 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50"
      @click="isNavVisible = false"
    ></div>
  </transition>
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
:root {
  --font-family-default: "Asap", sans-serif;
  --font-family-condensed: "Asap Condensed", sans-serif;
  --color-text-primary: rgba(0, 0, 0, 0.9);
  --color-text-secondary: rgba(0, 0, 0, 0.75);
  --color-text-quite: rgba(0, 0, 0, 0.6);
  --color-text-mute: rgba(0, 0, 0, 0.4);
}

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

.slide-top-enter-active {
  transition: transform 0.2s ease-out;
}
.slide-top-leave-active {
  transition: transform 0.2s ease-in;
}
.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(100%);
}

.fade-enter-active {
  transition: opacity 0.2s ease-out;
}
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
