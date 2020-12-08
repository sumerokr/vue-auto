<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Users</h1>

    <ul class="space-y-4">
      <li class="shadow rounded px-4 py-3" v-for="user in users" :key="user.id">
        <h2 class="text-lg text-black text-opacity-90">{{ user.name }}</h2>
        <p class="text-sm text-black text-opacity-60">
          Phone: {{ user.phone }}
        </p>
        <p class="text-sm text-black text-opacity-60">
          Email: {{ user.email }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "Users",

  setup: () => {
    const users: Ref<object[]> = ref([]);

    const getUsers = async () => {
      const res = await fetch(
        "https://oll9kk9mhi.execute-api.eu-central-1.amazonaws.com/test/cars"
      );
      const data = await res.json();

      users.value = data;
    };

    getUsers();

    return {
      users,
    };
  },
});
</script>
