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
      <div
        class="p-4 fixed z-40 right-0 bottom-0 left-0 bg-black bg-white"
        v-if="isSortVisible"
      >
        <h2 class="text-2xl">Sort options</h2>
        <ul class="py-2">
          <li
            class="flex items-center"
            v-for="sortOption in sortOptions"
            :key="sortOption.key"
          >
            <span class="text-black text-opacity-90 mr-auto">{{
              sortOption.title
            }}</span>
            <IconButton
              icon="arrow_downward"
              :style="
                sortKey === sortOption.key && sortDirection === 'desc'
                  ? '--icon-color: var(--color-text-primary)'
                  : false
              "
              @click="setSort(sortOption.key, 'desc')"
            />
            <IconButton
              icon="arrow_upward"
              :style="
                sortKey === sortOption.key && sortDirection === 'asc'
                  ? '--icon-color: var(--color-text-primary)'
                  : false
              "
              @click="setSort(sortOption.key, 'asc')"
            />
          </li>
        </ul>
      </div>
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

    <div
      class="fixed z-10 bottom-4 flex hidden bg-white p-1 shadow-8 rounded-full right-4"
    >
      <IconButton
        :icon="isCompactView ? 'view_stream' : 'view_module'"
      ></IconButton>
      <IconButton icon="search"></IconButton>
      <IconButton icon="sort"></IconButton>
      <IconButton icon="tune"></IconButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import AppButton from "@/components/AppButton/AppButton.vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import AppSearch from "@/components/AppSearch/AppSearch.vue";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import { mq } from "@/utils";
import { SortOption } from "@/types.ts";
import { getMakes } from "@/services/make-models";

export default defineComponent({
  name: "Cars",

  components: {
    AppButton,
    IconButton,
    CarListItemOne,
    AppSearch,
  },

  setup: () => {
    const isCompactView = ref(false);
    const carlist = ref<null | HTMLElement>(null);
    const compactBps = [
      380,
      577,
      873,
      1169,
      1465,
      1761,
      2057,
      2353,
      2649,
      2945,
    ];
    const normalBps = [421, 857, 1293, 1729, 2165, 2601, 3037, 3473];
    const carlistBps = mq({
      refEl: carlist,
      bps: [...new Set([...compactBps, ...normalBps])].sort((a, b) => a - b),
    });

    watch([carlistBps, isCompactView], () => {
      if (carlist.value === null) {
        return;
      }
      const triggerBp = carlistBps.value.slice(-1)[0];
      if (!triggerBp) {
        carlist.value.style.setProperty("--columns", "1");
        return;
      }
      if (isCompactView.value) {
        const biggest = compactBps
          .slice()
          .reverse()
          .find((i) => carlistBps.value.includes(i));
        if (biggest) {
          const index = compactBps.indexOf(biggest);
          carlist.value.style.setProperty("--columns", String(index + 2));
        } else {
          carlist.value.style.setProperty("--columns", "1");
        }
      } else {
        const biggest = normalBps
          .slice()
          .reverse()
          .find((i) => carlistBps.value.includes(i));
        if (biggest) {
          const index = normalBps.indexOf(biggest);
          carlist.value.style.setProperty("--columns", String(index + 2));
        } else {
          carlist.value.style.setProperty("--columns", "1");
        }
      }
    });

    const actions = ref(null);
    mq({
      refEl: actions,
      bps: [320],
    });

    //#region sort
    const sortOptions: SortOption[] = [
      { key: "createdAt", title: "Created" },
      { key: "price", title: "Price" },
      { key: "mileage", title: "Mileage" },
      { key: "year", title: "Year" },
    ];
    const sortKey = ref(sortOptions[0].key);
    const sortDirection = ref<"desc" | "asc">("desc");
    const isSortVisible = ref(false);
    const setSort = (key: string, direction: "desc" | "asc"): void => {
      sortKey.value = key;
      sortDirection.value = direction;
      isSortVisible.value = false;
    };
    //#endregion

    const isFilterVisible = ref(false);

    const store = useStore();
    const cars = store.state.cars;

    return {
      carlist,
      isCompactView,
      isSortVisible,
      sortKey,
      sortDirection,
      sortOptions,
      setSort,
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

.carlist {
  --columns: 1;
  grid-template-columns: repeat(var(--columns), 1fr);
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
