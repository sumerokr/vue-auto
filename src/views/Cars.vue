<template>
  <div class="p-4">
    <h1 class="flex justify-between items-start text-3xl mb-8">
      <span>Cars</span>
      <IconButton class="-mr-3 -my-1.5 ml-4">
        <span class="material-icons opacity-60 ml-auto" @click="changeVariant"
          >view_list</span
        >
      </IconButton>
    </h1>

    <ul class="flex space-x-4 mb-8">
      <li class="flex-1">
        <AppButton is-block before="filter_list">Filter</AppButton>
      </li>
      <li class="flex-1">
        <AppButton is-block before="sort">Sort</AppButton>
      </li>
    </ul>

    <ul
      class="grid gap-4"
      :class="{
        'grid-cols-1': currentVariant === 'full',
        'grid-cols-2': currentVariant === 'short',
      }"
    >
      <CarListItemOne v-for="car in cars" :key="car.id" :car="car" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import IconButton from "@/components/IconButton/IconButton.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";

export default defineComponent({
  name: "Cars",

  components: {
    IconButton,
    AppButton,
    CarListItemOne,
  },

  setup: () => {
    const store = useStore();
    const cars = store.state.cars;

    const variants = ["full", "short"];
    const currentVariant = ref(variants[0]);
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
