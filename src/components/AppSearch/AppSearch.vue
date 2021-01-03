<template>
  <form class="grid grid-cols-2 gap-4" @submit.prevent="submit">
    <AppSelect v-model="make" id="make" label="Make">
      <option value="" hidden selected></option>
      <option
        v-for="makeModel in makeModels"
        :value="makeModel.make"
        :key="makeModel.make"
      >
        {{ makeModel.make }}
      </option>
    </AppSelect>

    <AppSelect v-model="model" id="model" label="Model">
      <option value="" hidden selected></option>
      <option
        v-for="makeModel in makeModels"
        :value="makeModel.make"
        :key="makeModel.make"
      >
        {{ makeModel.make }}
      </option>
    </AppSelect>

    <AppInput
      v-model="minPrice"
      label="Min price, €"
      type="number"
      id="min-price"
    />

    <AppInput
      v-model="maxPrice"
      label="Max price, €"
      type="number"
      id="max-price"
    />

    <AppSelect v-if="isMore" v-model="minYear" id="min-year" label="Min year">
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
    </AppSelect>

    <AppSelect v-if="isMore" v-model="maxYear" id="max-year" label="Max year">
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
    </AppSelect>

    <AppInput
      v-if="isMore"
      v-model="minMileage"
      label="Min mileage, km"
      type="number"
      id="min-mileage"
    />

    <AppInput
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppSelect from "@/components/AppSelect/AppSelect.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { useRouter } from "vue-router";
import { makeModels } from "@/faker/cars.ts";

export default defineComponent({
  name: "AppSearch",

  components: {
    AppInput,
    AppSelect,
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

<style scoped></style>
