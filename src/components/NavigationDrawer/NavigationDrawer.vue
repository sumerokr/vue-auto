<template>
  <div class="navigation-drawer fixed z-50 top-0 bottom-0 left-0 bg-white w-64">
    <div class="px-4 py-3 flex items-center">
      <IconButton class="-m-3" @click="$emit('click')">
        <span class="material-icons align-top">close</span>
      </IconButton>
      <span class="text-2xl ml-8 font-medium italic">Logo</span>
      <!-- <span class="text-2xl ml-8 font-medium italic">vozila</span> -->
    </div>
    <ul>
      <li v-for="item in items" :key="item.name" @click="$emit('click')">
        <RouterLink class="block px-4 py-3" :to="{ name: item.name }">
          <span
            class="material-icons align-top mr-8 text-black text-opacity-60"
            >{{ item.icon }}</span
          >
          <span class="text-black text-opacity-90">{{ item.text }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";

export default defineComponent({
  name: "NavigationDrawer",

  emits: {
    click: null,
  },

  components: {
    IconButton,
  },

  setup: () => {
    return {
      items: [
        { name: "Home", text: "Home", icon: "home" },
        { name: "Search", text: "Search", icon: "search" },
        { name: "Add", text: "Add", icon: "add_box" },
        { name: "UserFavorites", text: "Favorites", icon: "bookmarks" },
        { name: "User", text: "Profile", icon: "person" },
        { name: "Pages", text: "Pages", icon: "library_books" },
        { name: "Prisma", text: "Prisma", icon: "apps" },
        { name: "Lambda users", text: "Lambda users", icon: "people" },
        { name: "Fonts", text: "Fonts", icon: "text_fields" },
      ],
    };
  },
});
</script>

<style>
.navigation-drawer {
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
}
</style>
