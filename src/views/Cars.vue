<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8" @click="changeVariant">Cars</h1>

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
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import CarListItemTwo from "@/components/car-list-items/CarListItemTwo.vue";

export default defineComponent({
  name: "Cars",

  components: {
    CarListItemOne,
    CarListItemTwo,
  },

  setup: () => {
    const cars = ref([]);
    const getCars = async () => {
      cars.value = await fetch("/api/cars").then((res) => res.json());
    };

    const variants = ["CarListItemOne", "CarListItemTwo"];
    const currentVariant = ref(variants[0]);
    const changeVariant = () => {
      const currentViewIndex = variants.findIndex(
        (i) => i === currentVariant.value
      );
      currentVariant.value = variants[currentViewIndex + 1] || variants[0];
    };

    getCars();

    return {
      cars,
      numberFormatter: new Intl.NumberFormat("ru-RU"),

      currentVariant,
      changeVariant,
    };
  },
});
</script>
