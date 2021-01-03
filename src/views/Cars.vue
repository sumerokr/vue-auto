<template>
  <div class="cars p-4">
    <h1 class="flex justify-between items-start text-3xl mb-8">
      <span>Cars</span>
    </h1>

    <ul class="actions flex space-x-2 mb-8" ref="actions">
      <li class="mr-auto">
        <AppButton before="view_module">View</AppButton>
      </li>
      <li class="">
        <AppButton before="sort" @click="isSortVisible = true">Sort</AppButton>
      </li>
      <li class="">
        <AppButton before="tune">Filter</AppButton>
      </li>
    </ul>

    <ul class="carlist grid gap-4" ref="carlist">
      <CarListItemOne v-for="car in cars" :key="car.id" :car="car" />
    </ul>

    <transition name="slide-top">
      <SortOptions
        v-if="isSortVisible"
        @click-cancel="isSortVisible = false"
        @click-sort="isSortVisible = false"
      />
    </transition>
    <transition name="fade">
      <div
        v-if="isSortVisible"
        class="fixed z-40 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50"
        @click="isSortVisible = false"
      ></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import AppButton from "@/components/AppButton/AppButton.vue";
import SortOptions from "@/components/SortOptions/SortOptions.vue";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import { mq } from "@/utils";

export default defineComponent({
  name: "Cars",

  components: {
    AppButton,
    CarListItemOne,
    SortOptions,
  },

  setup: () => {
    const carlist = ref(null);
    mq({
      refEl: carlist,
      bps: [421, 856, 1292, 1728, 2164],
    });

    const actions = ref(null);
    mq({
      refEl: actions,
      bps: [320],
    });

    const isSortVisible = ref(false);

    const store = useStore();
    const cars = store.state.cars;

    return {
      carlist,
      isSortVisible,
      cars,
      actions,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>

<style scoped>
.actions {
  font-family: var(--font-family-condensed);
}

.actions[data-mq*="320"] {
  font-family: var(--font-family-default);
}

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

.slide-top-enter-active {
  transition: transform 0.2s ease-out;
}
.slide-top-leave-active {
  transition: transform 0.2s ease-in;
}
.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(100%);
}

.fade-enter-active {
  transition: opacity 0.2s ease-out;
}
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
