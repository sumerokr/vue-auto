<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Pages</h1>

    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link
          class="block py-3 text-black text-opacity-90"
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
        { name: "Pricing", text: "Pricing" },
        { name: "Fonts", text: "Fonts", icon: "text_fields" },
        { name: "User", text: "Profile", icon: "person" },
        { name: "Add", text: "Add", icon: "add_box" },
        { name: "Lambda users", text: "Lambda users", icon: "people" },
        { name: "Prisma", text: "Prisma", icon: "apps" },
      ],
    };
  },
});
</script>
