<template>
  <div class="cars p-4">
    <h1 class="flex justify-between items-start text-3xl mb-8">
      <span>Cars</span>
    </h1>

    <ul class="actions flex space-x-2 mb-8" ref="actions">
      <li class="mr-auto">
        <AppButton
          :before="isCompactView ? 'view_stream' : 'view_module'"
          @click="isCompactView = !isCompactView"
          >View</AppButton
        >
      </li>
      <li class="">
        <AppButton before="sort" @click="isSortVisible = true">Sort</AppButton>
      </li>
      <li class="">
        <AppButton before="tune" @click="isFilterVisible = true"
          >Filter</AppButton
        >
      </li>
    </ul>

    <ul
      class="carlist grid gap-4 class"
      :class="{ 'is-compact': isCompactView }"
      ref="carlist"
    >
      <CarListItemOne v-for="car in cars" :key="car.id" :car="car" />
    </ul>

    <transition name="fade">
      <div
        v-if="isSortVisible"
        class="fixed z-40 inset-0 bg-black bg-opacity-50"
        @click="isSortVisible = false"
      ></div>
    </transition>
    <transition name="slide-top">
      <SortOptions
        v-if="isSortVisible"
        @click-cancel="isSortVisible = false"
        @click-sort="isSortVisible = false"
      />
    </transition>

    <transition name="fade">
      <div
        v-if="isFilterVisible"
        class="fixed z-50 inset-0 bg-black bg-opacity-80"
        @click.self="isFilterVisible = false"
      >
        <div class="p-4 flex items-center justify-end">
          <span
            class="material-icons text-white"
            @click="isFilterVisible = false"
            >close</span
          >
        </div>
      </div>
    </transition>
    <transition name="slide-top">
      <div
        v-if="isFilterVisible"
        class="fixed z-50 top-14 right-0 bottom-0 left-0 p-4 bg-white"
      >
        <AppSearch
          @click-cancel="isFilterVisible = false"
          @click-sort="isFilterVisible = false"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import AppButton from "@/components/AppButton/AppButton.vue";
import SortOptions from "@/components/SortOptions/SortOptions.vue";
import AppSearch from "@/components/AppSearch/AppSearch.vue";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import { mq } from "@/utils";

export default defineComponent({
  name: "Cars",

  components: {
    AppButton,
    CarListItemOne,
    SortOptions,
    AppSearch,
  },

  setup: () => {
    const carlist = ref(null);
    mq({
      refEl: carlist,
      bps: [
        421,
        472,
        642,
        776,
        856,
        928,
        1080,
        1232,
        1292,
        1384,
        1536,
        1688,
        1728,
        1840,
        1992,
        2144,
        2164,
      ],
    });

    const actions = ref(null);
    mq({
      refEl: actions,
      bps: [320],
    });

    const isCompactView = ref(false);
    const isSortVisible = ref(false);
    const isFilterVisible = ref(false);

    const store = useStore();
    const cars = store.state.cars;

    return {
      carlist,
      isCompactView,
      isSortVisible,
      isFilterVisible,
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

.app-search {
  font-family: var(--font-family-condensed);
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

.carlist.is-compact {
  grid-template-columns: repeat(2, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="472"] {
  grid-template-columns: repeat(3, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="642"] {
  grid-template-columns: repeat(4, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="776"] {
  grid-template-columns: repeat(5, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="928"] {
  grid-template-columns: repeat(6, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="1080"] {
  grid-template-columns: repeat(7, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="1232"] {
  grid-template-columns: repeat(8, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="1384"] {
  grid-template-columns: repeat(9, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="1536"] {
  grid-template-columns: repeat(10, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="1688"] {
  grid-template-columns: repeat(11, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="1840"] {
  grid-template-columns: repeat(12, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="1992"] {
  grid-template-columns: repeat(13, minmax(auto, 1fr));
}

.carlist.is-compact[data-mq*="2144"] {
  grid-template-columns: repeat(14, minmax(auto, 1fr));
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
