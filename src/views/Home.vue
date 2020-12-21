<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Home</h1>

    <AppInput />

    <ul>
      <li v-for="item in items" :key="item.name">
        <RouterLink
          class="block py-3"
          :to="{ name: item.name, params: item.params ? item.params : {} }"
        >
          <span
            class="material-icons align-top mr-8 text-black text-opacity-60"
            >{{ item.icon }}</span
          >
          <span class="text-black text-opacity-90">{{ item.text }}</span>
        </RouterLink>
      </li>
    </ul>

    <br /><br /><br />

    <p>
      Don't have an account?
      <router-link class="text-blue-700" :to="{ name: 'Registration' }">
        Register</router-link
      >
    </p>
    <br />
    <p>
      Already registered?
      <router-link class="text-blue-700" :to="{ name: 'Login' }">
        Log in</router-link
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import AppInput from "@/components/AppInput/AppInput.vue";

export default defineComponent({
  name: "Home",

  components: {
    AppInput,
  },

  setup: () => {
    const store = useStore();

    return {
      items: [
        { name: "Search", text: "Search", icon: "search" },
        { name: "Cars", text: "Car list", icon: "list" },
        {
          name: "Car",
          text: "Car item",
          icon: "search",
          params: { id: store.state.cars[0].id },
        },
      ],
    };
  },
});
</script>
