<template>
  <div class="p-4 bg-gray-800">
    <ul class="mb-8">
      <li v-for="item in items" :key="item.name" @click="$emit('click')">
        <RouterLink
          class="py-3 text-white opacity-90 flex items-center"
          :to="{ name: item.name }"
        >
          <span class="material-icons icon mr-8">{{ item.icon }}</span>
          <span class="text">{{ item.text }}</span>
        </RouterLink>
      </li>
    </ul>

    <p class="text-sm text-white opacity-70">
      Copyright © My site {{ new Date().getFullYear() }}.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",

  setup: () => {
    return {
      items: [
        { name: "Home", text: "Home", icon: "home" },
        { name: "Search", text: "Search", icon: "search" },
        { name: "Favorites", text: "Favorites", icon: "bookmarks" },
        { name: "SavedSearch", text: "Saved search", icon: "favorite" },
        { name: "Add", text: "Add a car", icon: "add_box" },
      ],
    };
  },
});
</script>

<style scoped></style>
