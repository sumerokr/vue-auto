<template>
  <div class="cars p-4" ref="root">
    <h1 class="flex justify-between items-start text-3xl mb-8">
      <span>Cars</span>
    </h1>

    <ul class="flex space-x-4 mb-8">
      <li class="flex-1">
        <AppButton is-block before="filter_list">Filter</AppButton>
      </li>
      <li class="flex-1">
        <AppButton is-block before="sort">Sort</AppButton>
      </li>
    </ul>

    <ul class="carlist grid gap-4" ref="carlist">
      <CarListItemOne v-for="car in cars" :key="car.id" :car="car" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import AppButton from "@/components/AppButton/AppButton.vue";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import { mq } from "@/utils";

export default defineComponent({
  name: "Cars",

  components: {
    AppButton,
    CarListItemOne,
  },

  setup: () => {
    const carlist = ref(null);
    const relevantBps = mq({
      refEl: carlist,
      bps: [421, 856, 1292, 1728, 2164],
    });

    const store = useStore();
    const cars = store.state.cars;

    return {
      carlist,
      cars,
      relevantBps,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>

<style scoped>
.carlist[data-mq*="421"] {
  grid-template-columns: repeat(2, minmax(200px, 1fr));
}

.carlist[data-mq*="856"] {
  grid-template-columns: repeat(3, minmax(200px, 1fr));
}

.carlist[data-mq*="1292"] {
  grid-template-columns: repeat(4, minmax(200px, 1fr));
}

.carlist[data-mq*="1728"] {
  grid-template-columns: repeat(5, minmax(200px, 1fr));
}

.carlist[data-mq*="2164"] {
  grid-template-columns: repeat(6, minmax(200px, 1fr));
}
</style>
