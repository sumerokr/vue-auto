<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Companies</h1>

    <ul v-if="companies.length">
      <li v-for="company in companies" :key="company.id">
        <router-link :to="{ name: 'Company', params: { id: company.id } }">{{
          company.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { firestore } from "@/firebase/firestore.ts";

export default defineComponent({
  name: "Companies",

  setup: () => {
    const companies: Ref<object[]> = ref([]);
    const companiesRef = firestore.collection("companies");
    companiesRef
      .limit(20)
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          companies.value.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });

    return {
      companies,
    };
  },
});
</script>
