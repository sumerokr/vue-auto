<template>
  <!-- <AppNav /> -->
  <AppBarTop
    @click="
      () => {
        isNavVisible = true;
      }
    "
  /><transition name="slide">
    <NavigationDrawer
      v-if="isNavVisible"
      @click="
        () => {
          isNavVisible = false;
        }
      "
  /></transition>
  <transition name="fade">
    <div
      v-if="isNavVisible"
      class="fixed z-40 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-20"
      @click="
        () => {
          isNavVisible = false;
        }
      "
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
