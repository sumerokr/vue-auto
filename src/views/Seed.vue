<template>
  <div class="p-4">
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
import { companies } from "@/faker/companies.ts";

const seed = async (secret: string) => {
  if (secret !== "1984") {
    alert("bad secret");
    return;
  }
  const companiesRef = firestore.collection("companies");
  const batch = firestore.batch();

  companies.forEach((company: object) => {
    const companyRef = companiesRef.doc();
    batch.set(companyRef, company);
  });

  try {
    await batch.commit();
    console.log("batch done!");
  } catch (err) {
    console.warn("oops");
  }
};

export default defineComponent({
  name: "Seed",

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
