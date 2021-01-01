<template>
  <div class="p-4">
    <h1 class="text-2xl mb-8">Search for a car</h1>

    <form class="grid gap-4 grid-cols-2" @submit.prevent="onSearch">
      <button
        class="col-span-2 border-2 border-gray-200 rounded bg-white px-3.5 py-2.5 w-full flex"
        type="button"
        @click="showSelector"
      >
        <span class="material-icons text-black text-opacity-60 mr-3"
          >directions_car</span
        >
        <span class="text-black text-opacity-60 font-medium">Make, model</span>
        <span class="material-icons text-black text-opacity-60 ml-auto"
          >search</span
        >
      </button>

      <transition name="slide-top">
        <div
          v-if="isSelectorVisible"
          class="fixed right-0 bottom-0 left-0 z-50 bg-white rounded-t flex flex-col"
          :style="`
            top: 120px;
            box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06);
          `"
        >
          <div class="p-4">
            <input
              class="border-2 border-gray-200 bg-gray-50 rounded focus:outline-none focus:border-blue-400 px-3.5 py-2.5 w-full"
              type="text"
              id="make"
            />
          </div>
          <div class="flex-grow p-4 overflow-y-auto">
            <ul>
              <li v-for="makeModel in makeModels" :key="makeModel.make">
                <div class="flex py-3" @click="expand(makeModel.make)">
                  <span class="flex-grow">{{ makeModel.make }}</span>
                  <span
                    class="material-icons p-3 -my-3 transform transition-transform"
                    :class="{ 'rotate-180': expanded[makeModel.make] }"
                    >expand_more</span
                  >
                </div>

                <!-- <transition name="slide-bottom"> -->
                <div v-if="expanded[makeModel.make]">
                  <div
                    class="flex items-center"
                    v-for="model in makeModel.models"
                    :key="model"
                  >
                    <span
                      class="material-icons p-2 mr-2 text-black text-opacity-60"
                      :class="{ 'rotate-180': expanded[makeModel.make] }"
                      >check_box_outline_blank</span
                    >
                    <label>{{ model }}</label>
                  </div>
                </div>
                <!-- </transition> -->
              </li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 flex justify-end">
            <button
              class="text-black text-opacity-60 px-4 py-2 text-sm rounded mr-4 font-medium uppercase"
              type="button"
              @click="hideSelector"
            >
              Cancel
            </button>
            <button
              class="bg-blue-700 text-white px-4 py-2 text-sm rounded text-opacity-90 font-medium uppercase"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </transition>

      <!-- <br /> -->

      <AppInputAlt
        v-model="minPrice"
        label="Min price, €"
        type="number"
        id="min-price"
      />

      <AppInputAlt
        v-model="maxPrice"
        label="Max price, €"
        type="number"
        id="max-price"
      />

      <AppSelectAlt
        v-if="isMore"
        v-model="minYear"
        id="min-year"
        label="Min year"
      >
        <option value="" hidden selected></option>
        <option
          v-for="year in new Array(20)
            .fill(null)
            .map((item, index) => 2020 - index)"
          :value="year"
          :key="year"
        >
          {{ year }}
        </option>
      </AppSelectAlt>

      <AppSelectAlt
        v-if="isMore"
        v-model="maxYear"
        id="max-year"
        label="Max year"
      >
        <option value="" hidden selected></option>
        <option
          v-for="year in new Array(20)
            .fill(null)
            .map((item, index) => 2020 - index)"
          :value="year"
          :key="year"
        >
          {{ year }}
        </option>
      </AppSelectAlt>

      <AppInputAlt
        v-if="isMore"
        v-model="minMileage"
        label="Min mileage, km"
        type="number"
        id="min-mileage"
      />

      <AppInputAlt
        v-if="isMore"
        v-model="maxMileage"
        label="Max mileage, km"
        type="number"
        id="max-mileage"
      />

      <p class="col-span-2 flex justify-between">
        <AppButton
          before="tune"
          appearance="secondary"
          size="36"
          @click="isMore = true"
          >More options</AppButton
        >

        <AppButton before="restore" appearance="secondary" size="36"
          >Reset</AppButton
        >
      </p>

      <div class="col-span-2">
        <AppButton
          before="search"
          appearance="primary"
          size="48"
          type="submit"
          is-block
          >Search</AppButton
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppInputAlt from "@/components/AppInputAlt/AppInputAlt.vue";
import AppSelectAlt from "@/components/AppSelectAlt/AppSelectAlt.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { useRouter } from "vue-router";
import { makeModels } from "@/faker/cars.ts";

export default defineComponent({
  name: "Search",

  components: {
    AppInputAlt,
    AppSelectAlt,
    AppButton,
  },

  setup: () => {
    const router = useRouter();
    const isSelectorVisible = ref(false);
    const isMore = ref(false);

    const make = ref("");
    const model = ref("");
    const minPrice = ref("");
    const maxPrice = ref("");
    const minYear = ref("");
    const maxYear = ref("");
    const minMileage = ref("");
    const maxMileage = ref("");

    interface Expanded {
      [key: string]: boolean;
    }
    const expanded = ref<Expanded>({});

    return {
      make,
      model,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      minMileage,
      maxMileage,
      makeModels,
      isSelectorVisible,
      expanded,
      isMore,
      onSearch: () => {
        router.push({
          name: "Cars",
        });
      },
      showSelector: () => {
        isSelectorVisible.value = true;
      },
      hideSelector: () => {
        isSelectorVisible.value = false;
      },
      expand: (car: string) => {
        if (expanded.value[car]) {
          expanded.value[car] = false;
        } else {
          expanded.value[car] = true;
        }
      },
    };
  },
});
</script>

<style scoped>
.slide-top-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-top-leave-active {
  transition: transform 0.3s ease-in;
}
.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(100%);
}

/* .slide-bottom-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-bottom-leave-active {
  transition: transform 0.3s ease-in;
}
.slide-bottom-enter-from,
.slide-bottom-leave-to {
  transform: translateY(-100%);
} */
</style>
