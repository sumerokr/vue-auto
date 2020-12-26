<template>
  <div class="p-4 grid grid-cols-1 gap-4">
    <CarListItemOne :car="car0" />
    <CarListItemOne :car="car1" />
    <CarListItemOne :car="car2" />
    <CarListItemOne :car="car3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";

export default defineComponent({
  name: "CarCard",

  components: {
    CarListItemOne,
  },

  setup: () => {
    const store = useStore();
    const car0 = store.state.cars[0];
    const car1 = store.state.cars[1];
    const car2 = store.state.cars[2];
    const car3 = store.state.cars[3];

    return {
      car0,
      car1,
      car2,
      car3,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>
