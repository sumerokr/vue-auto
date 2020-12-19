<template>
  <div class="p-4 space-y-4">
    <CarListItemThree :car="car0" />
    <CarListItemThree :car="car1" />
    <CarListItemThree :car="car2" />
    <CarListItemThree :car="car3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import CarListItemThree from "@/components/car-list-items/CarListItemThree.vue";

export default defineComponent({
  name: "CarCard",

  components: {
    CarListItemThree,
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
