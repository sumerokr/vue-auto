<template>
  <div class="p-4" v-if="company">
    <p class="-mx-4 -mt-4 mb-4">
      <img
        class="w-full"
        :src="company.image"
        :srcset="`
          ${company.images[0]}    320w,
          ${company.images[1]}    640w,
          ${company.images[2]}    960w,
          ${company.images[3]}  1280w,
          ${company.images[4]} 1600w
        `"
        width="320"
        height="180"
        alt=""
      />
    </p>
    <h1 class="text-3xl mb-8">{{ company.name }}</h1>
    <p>{{ company.description }}</p>

    <br />

    <h2 class="text-xl mb-2">Service</h2>
    <ul>
      <li>Sell new car</li>
      <li>Sell used car</li>
      <li>Repair</li>
      <li>Car parts</li>
    </ul>

    <br />

    <h2 class="text-xl mb-2">Contacts</h2>
    <ul>
      <li>Phone: {{ company.phone }}</li>
      <li>Address: {{ company.address.city }}, {{ company.address.street }}</li>
    </ul>

    <br />

    <h2 class="text-xl mb-2">Working time</h2>
    <ul>
      <li>
        Monday-Frriday:
        {{ String(company.workingTime.weekStart).padStart(2, "0") }}:00 -
        {{ String(company.workingTime.weekEnd).padStart(2, "0") }}:00
      </li>
      <li>
        Saturday: {{ String(company.workingTime.stStart).padStart(2, "0") }}:00
        - {{ String(company.workingTime.stEnd).padStart(2, "0") }}:00
      </li>
      <li>
        Sunday: {{ String(company.workingTime.snStart).padStart(2, "0") }}:00 -
        {{ String(company.workingTime.snEnd).padStart(2, "0") }}:00
      </li>
    </ul>
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { firestore } from "@/firebase/firestore.ts";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Company",

  setup: () => {
    const route = useRoute();

    const company: Ref<any> = ref(null);
    const companyRef = firestore
      .collection("companies")
      .doc(String(route.params.id));

    companyRef.get().then((doc) => {
      company.value = doc.data();
    });

    return {
      company,
    };
  },
});
</script>
