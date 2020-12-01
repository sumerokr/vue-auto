<template>
  <div class="app-nav fixed right-0 bottom-0 left-0 z-40 bg-white">
    <nav id="nav" class="flex justify-end">
      <router-link
        class="flex-1 flex flex-col p-2 text-center text-black text-opacity-60 transition-colors duration-200"
        active-class="text-opacity-90"
        :to="{ name: 'Home' }"
      >
        <span class="material-icons">home</span>
        <span class="text-xs">Home</span>
      </router-link>
      <router-link
        class="flex-1 flex flex-col p-2 text-center text-black text-opacity-60 transition-colors duration-200"
        active-class="text-opacity-90"
        :to="{ name: 'Search' }"
      >
        <span class="material-icons">search</span>
        <span class="text-xs">Search</span>
      </router-link>
      <router-link
        class="flex-1 flex flex-col p-2 text-center text-black text-opacity-60 transition-colors duration-200"
        active-class="text-opacity-90"
        to="/"
      >
        <span class="material-icons">add_box</span>
        <span class="text-xs">Add</span>
      </router-link>
      <router-link
        class="flex-1 flex flex-col p-2 text-center text-black text-opacity-60 transition-colors duration-200"
        active-class="text-opacity-90"
        :to="{ name: 'UserFavorites' }"
      >
        <span class="material-icons">bookmarks</span>
        <span class="text-xs">Favorites</span>
      </router-link>
      <router-link
        class="flex-1 flex flex-col p-2 text-center text-black text-opacity-60 transition-colors duration-200"
        active-class="text-opacity-90"
        :to="{ name: 'User' }"
      >
        <span class="material-icons">person</span>
        <span class="text-xs">Profile</span>
      </router-link>
    </nav>
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

<style scoped>
.app-nav {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
</style>
