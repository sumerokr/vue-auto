<template>
  <div class="p-4">
    <h1 class="flex items-center text-3xl mb-8">
      <span>Cars</span>
      <span class="material-icons opacity-60 ml-auto" @click="changeVariant"
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

    <ul
      :class="{
        grid: currentVariant === 'CarListItemFour',
        'space-y-4': currentVariant !== 'CarListItemFour',
        'gap-4': currentVariant === 'CarListItemFour',
        'grid-cols-2': currentVariant === 'CarListItemFour',
      }"
    >
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
import { useStore } from "vuex";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import CarListItemTwo from "@/components/car-list-items/CarListItemTwo.vue";
import CarListItemThree from "@/components/car-list-items/CarListItemThree.vue";
import CarListItemFour from "@/components/car-list-items/CarListItemFour.vue";

export default defineComponent({
  name: "Cars",

  components: {
    CarListItemOne,
    CarListItemTwo,
    CarListItemThree,
    CarListItemFour,
  },

  setup: () => {
    const store = useStore();
    const cars = store.state.cars;

    const variants = [
      "CarListItemThree",
      "CarListItemTwo",
      "CarListItemOne",
      "CarListItemFour",
    ];
    const currentVariant = ref(variants[3]);
    const changeVariant = () => {
      const currentViewIndex = variants.findIndex(
        (i) => i === currentVariant.value
      );
      currentVariant.value = variants[currentViewIndex + 1] || variants[0];
    };

    return {
      cars,
      numberFormatter: new Intl.NumberFormat("ru-RU"),

      currentVariant,
      changeVariant,
    };
  },
});
</script>
