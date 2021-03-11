<template>
  <div class="navigation-drawer flex flex-col shadow-16">
    <div class="px-4 py-3 flex items-center">
      <IconButton class="-m-3" icon="close" @click="$emit('click')" />
      <span class="text-2xl ml-8 font-medium italic">Logo</span>
    </div>
    <ul class="my-2">
      <li v-for="item in items" :key="item.name" @click="$emit('click')">
        <RouterLink class="link" :to="{ name: item.name }">
          <span class="material-icons icon">{{ item.icon }}</span>
          <span class="text">{{ item.text }}</span>
        </RouterLink>
      </li>
    </ul>
    <ul class="mt-auto mb-2">
      <li>
        <RouterLink class="link" :to="{ name: 'Pages' }">
          <span class="material-icons icon">library_books</span>
          <span class="text">Others</span>
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
        { name: "Favorites", text: "Favorites", icon: "bookmarks" },
        { name: "SavedSearch", text: "Saved search", icon: "favorite" },
        { name: "Add", text: "Add a car", icon: "add_box" },
      ],
    };
  },
});
</script>

<style scoped>
.navigation-drawer {
  position: fixed;
  z-index: 50;
  top: 0;
  bottom: 0;
  left: 0;
  width: 256px;
  background-color: #fff;
}

.theme-reply .navigation-drawer {
  background-color: #344955;
}

.link {
  display: flex;
  padding: 0.75rem 1rem;
  color: var(--color-text-primary);
}

.icon {
  margin-right: 2rem;
  color: var(--color-text-quite);
}

.theme-reply .icon {
  color: #b4c1cc;
}

.theme-reply .router-link-active .icon {
  color: #f9aa33;
}

.text {
  font-weight: 500;
  color: var(--color-text-primary);
}

.theme-reply .text {
  color: #b4c1cc;
}

.theme-reply .router-link-active .text {
  color: #f9aa33;
}
</style>
