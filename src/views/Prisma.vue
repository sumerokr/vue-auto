<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Prisma cars</h1>

    <ul class="flex space-x-4 mb-8">
      <li class="flex-1">
        <button
          class="border-2 border-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons align-top mr-3">filter_list</i>
          Filter
        </button>
      </li>
      <li class="flex-1">
        <button
          class="border-2 border-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons align-top mr-3">sort</i>
          Sort
        </button>
      </li>
    </ul>

    <ul class="space-y-4">
      <li
        class="border-b border-solid border-gray-200 pb-4"
        v-for="car in cars"
        :key="car.brand + car.model + car.createdAt"
      >
        <h2>{{ car.brand }} {{ car.model }}</h2>
        <p>Created at: {{ car.createdAt }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "Cars",

  setup: () => {
    const cars: Ref<object[]> = ref([]);

    const getCars = async () => {
      const response = await fetch(
        "https://prisma-tryout-service-mchhdf7mpa-ey.a.run.app/foo"
      );
      const json = await response.json();
      cars.value = json;
    };

    getCars();

    return {
      cars,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>
