<template>
  <div class="p-4">
    <CarListItemOne :car="car" />
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
    const car = store.state.cars[0];

    return {
      car,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>
