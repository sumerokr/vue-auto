<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Pages</h1>

    <ul>
      <li
        v-for="route in routes"
        :key="route.name"
        class="border-b border-black border-opacity-5"
      >
        <router-link
          class="block px-2 py-3 text-black text-opacity-60"
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
  name: "Pages",

  setup: () => {
    return {
      routes: [
        {
          name: "Cars",
          text: "Cars",
        },
        {
          name: "Companies",
          text: "Companies",
        },
        {
          name: "Search",
          text: "Search",
        },
      ],
    };
  },
});
</script>
