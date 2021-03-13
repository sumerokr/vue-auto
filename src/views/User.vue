<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">User</h1>

    <ul>
      <li v-for="route in routes" :key="route.name" class="">
        <router-link class="block py-3" :to="{ name: route.name }"
          ><i
            class="material-icons align-top mr-3 text-black text-opacity-60"
            >{{ route.icon }}</i
          ><span class="text-black text-opacity-90">{{
            route.text
          }}</span></router-link
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
          name: "Favorites",
          text: "Favorites",
          icon: "bookmarks",
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
