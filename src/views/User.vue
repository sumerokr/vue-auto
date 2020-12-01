<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">User</h1>

    <ul>
      <li v-for="route in routes" :key="route.name" class="">
        <router-link
          class="block py-3 text-black text-opacity-60"
          :to="{ name: route.name }"
          ><i class="material-icons align-top mr-3">{{ route.icon }}</i
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
          name: "UserPersonalDetails",
          text: "Personal details",
          icon: "person_outline",
        },
        {
          name: "UserPaymentHistory",
          text: "Payment history",
          icon: "monetization_on",
        },
      ],
    };
  },
});
</script>
