<template>
  <div class="p-4">
    <h1 class="flex justify-between items-center text-3xl mb-8">
      <span>Cars</span>
      <span class="material-icons opacity-60" @click="changeVariant"
        >view_list</span
      >
    </h1>

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
      <component
        :is="currentVariant"
        v-for="car in cars"
        :key="car.id"
        :car="car"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getCars as getLocalCars } from "@/faker/cars";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import CarListItemTwo from "@/components/car-list-items/CarListItemTwo.vue";
import CarListItemThree from "@/components/car-list-items/CarListItemThree.vue";

export default defineComponent({
  name: "Cars",

  components: {
    CarListItemOne,
    CarListItemTwo,
    CarListItemThree,
  },

  setup: () => {
    const cars = ref(getLocalCars());
    // const getCars = async () => {
    //   cars.value = await fetch("/api/cars").then((res) => res.json());
    // };

    const variants = ["CarListItemThree", "CarListItemTwo", "CarListItemOne"];
    const currentVariant = ref(variants[0]);
    const changeVariant = () => {
      const currentViewIndex = variants.findIndex(
        (i) => i === currentVariant.value
      );
      currentVariant.value = variants[currentViewIndex + 1] || variants[0];
    };

    // getCars();

    return {
      cars,
      numberFormatter: new Intl.NumberFormat("ru-RU"),

      currentVariant,
      changeVariant,
    };
  },
});
</script>
