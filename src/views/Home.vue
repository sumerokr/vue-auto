<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Home</h1>

    <p>
      Don't have an account?
      <router-link class="text-blue-500" :to="{ name: 'Registration' }">
        Register</router-link
      >
    </p>
    <br />
    <p>
      Already registered?
      <router-link class="text-blue-500" :to="{ name: 'Login' }">
        Log in</router-link
      >
    </p>

    <br /><br /><br />

    <form class="flex space-x-4" @submit.prevent="onSeed">
      <div class="flex-1">
        <input
          class="border border-gray-200 p-2 w-full"
          type="text"
          v-model="secret"
        />
      </div>
      <div class="flex-1">
        <button
          class="bg-blue-500 text-white px-4 py-3 rounded text-opacity-90"
          type="submit"
        >
          Seed
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { firestore } from "@/firebase/firestore.ts";

const seed = async (secret: string) => {
  if (secret !== "1984") {
    alert("bad secret");
    return;
  }
  const companiesRef = firestore.collection("companies");
  try {
    companiesRef.add({
      name: "Bozkovic",
      phone: "+123456789",
    });
  } catch (err) {
    console.warn("oops");
  }
};

export default defineComponent({
  name: "Home",

  setup: () => {
    const secret = ref("");

    return {
      secret,
      onSeed: () => {
        seed(secret.value);
      },
    };
  },
});
</script>
