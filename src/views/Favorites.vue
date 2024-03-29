<template>
  <div class="cars">
    <h1 class="text-3xl p-4 hidden">Favorites</h1>

    <ul
      class="filters relative z-10 flex space-x-2 justify-end p-2 sticky top-14 bg-white"
    >
      <li>
        <AppButton before="sort" @click="isSortVisible = true">Sort</AppButton>
      </li>
      <li>
        <AppButton before="tune" @click="isFilterVisible = true"
          >Filter</AppButton
        >
      </li>
    </ul>

    <ul class="carlist grid gap-2" ref="carlist">
      <CarListItemOne v-for="car in cars" :key="car.id" :car="car" />
    </ul>

    <!-- sort -->
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
              icon="sort"
              :style="
                sortKey === sortOption.key && sortDirection === 'desc'
                  ? '--icon-color: var(--color-text-primary)'
                  : false
              "
              @click="setSort(sortOption.key, 'desc')"
            />
            <IconButton
              icon="sort"
              style="transform: rotateX(180deg)"
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
    <!-- /sort -->

    <!-- filter -->
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
          :initial-search-params="composableSearchParams"
          @submit="onSubmit"
        >
          <template #footer>
            <AppButton
              before="search"
              appearance="primary"
              size="48"
              type="submit"
              is-block
              >Search</AppButton
            >
          </template>
        </AppSearch>
      </div>
    </transition>
    <!-- /filter -->

    <!-- <div
      class="fixed z-10 bottom-4 flex hidden bg-white p-1 shadow-8 rounded-full right-4"
    >
      <IconButton
        :icon="isCompactView ? 'view_stream' : 'view_module'"
      ></IconButton>
      <IconButton icon="search"></IconButton>
      <IconButton icon="sort"></IconButton>
      <IconButton icon="tune"></IconButton>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import AppSearch from "@/components/AppSearch/AppSearch.vue";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import { useCars } from "@/services/cars/adapter.ts";
import { useCarsSearch } from "@/composable/cars-search";
import { SortOption, searchParams } from "@/types.ts";

export default defineComponent({
  name: "Cars",

  components: {
    AppButton,
    IconButton,
    CarListItemOne,
    AppSearch,
  },

  setup: () => {
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

    //#region cars
    const { data: cars, send: getCars, isLoading: areCarsLoading } = useCars();
    const composableSearchParams = useCarsSearch();

    const getCarsWithParams = () => {
      getCars({
        filter: composableSearchParams,
        sort: {
          sortKey: sortKey.value,
          sortDirection: sortDirection.value,
        },
      });
    };

    const onSubmit = (submittedSearchParams: searchParams) => {
      Object.assign(composableSearchParams, submittedSearchParams);
      getCarsWithParams();
      isFilterVisible.value = false;
    };

    watch([sortKey, sortDirection], () => {
      getCarsWithParams();
    });

    getCarsWithParams();
    //#endregion

    return {
      isSortVisible,
      sortKey,
      cars,
      areCarsLoading,
      sortDirection,
      sortOptions,
      onSubmit,
      setSort,
      getCarsWithParams,
      isFilterVisible,
      composableSearchParams,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>

<style scoped>
.carlist {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.filters {
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.12);
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
