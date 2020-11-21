<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">User</h1>

    <ul>
      <li
        v-for="route in routes"
        :key="route"
        class="border-b border-black border-opacity-5"
      >
        <router-link
          class="block px-2 py-2 text-black text-opacity-90"
          :to="{ name: route.name }"
          >{{ route.text }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User",

  setup: () => {
    return {
      routes: [
        {
          name: "UserAdverts",
          text: "My adverts",
        },
        {
          name: "UserFavorites",
          text: "Favorites",
        },
        {
          name: "UserMessages",
          text: "Messages",
        },
        {
          name: "UserSubscriptions",
          text: "Subscriptions",
        },
      ],
    };
  },
});
</script>
