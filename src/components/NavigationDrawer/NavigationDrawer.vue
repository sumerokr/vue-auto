<template>
  <div class="navigation-drawer fixed z-50 top-0 bottom-0 left-0 bg-white w-64">
    <div class="p-4">
      <span class="material-icons align-top" @click="$emit('click')"
        >close</span
      >
    </div>
    <ul>
      <li v-for="item in items" :key="item.name" @click="$emit('click')">
        <RouterLink
          class="block px-4 py-3 text-black text-opacity-90"
          :to="{ name: item.name }"
        >
          <span class="material-icons align-top mr-8">{{ item.icon }}</span>
          {{ item.text }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationDrawer",

  emits: {
    click: null,
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
      ],
    };
  },
};
</script>

<style>
.navigation-drawer {
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
}
</style>
