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
          class="block px-2 py-3 text-black text-opacity-90"
          :to="{ name: route.name }"
          ><i class="material-icons-outlined align-middle mr-3">{{
            route.icon
          }}</i>
          {{ route.text }}</router-link
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
          icon: "view_agenda",
        },
        {
          name: "UserFavorites",
          text: "Favorites",
          icon: "bookmarks",
        },
        {
          name: "UserMessages",
          text: "Messages",
          icon: "message",
        },
        {
          name: "UserSubscriptions",
          text: "Subscriptions",
          icon: "monetization_on",
        },
      ],
    };
  },
});
</script>
