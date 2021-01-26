import { ref } from "vue";

const make = ref<null | string>(null);
const model = ref<null | string>(null);
const minPrice = ref<null | number>(null);
const maxPrice = ref<null | number>(null);
const minYear = ref<null | number>(null);
const maxYear = ref<null | number>(null);
const minMileage = ref<null | number>(null);
const maxMileage = ref<null | number>(null);
const gearbox = ref<null | string>(null);
const fuel = ref<null | string>(null);

export const useCarsSearch = () => {
  return {
    make,
    model,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    minMileage,
    maxMileage,
    gearbox,
    fuel,
  };
};
