<template>
  <div class="p-4">
    <CarListItemTwo :car="car" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import CarListItemTwo from "@/components/car-list-items/CarListItemTwo.vue";

export default defineComponent({
  name: "CarCard",

  components: {
    CarListItemTwo,
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
