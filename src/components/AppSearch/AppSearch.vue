<template>
  <form class="grid grid-cols-2 gap-4" @submit.prevent="onSubmit">
    <AppSelect v-model="make" id="make" label="Make">
      <option value="" hidden selected></option>
      <option v-for="make in makeOptions" :value="make" :key="make">
        {{ make }}
      </option>
    </AppSelect>

    <AppSelect
      v-model="model"
      id="model"
      label="Model"
      :disabled="make === '' || areModelOptionsLoading === true"
      :loading="areModelOptionsLoading === true"
    >
      <option value="" hidden selected></option>
      <template v-if="make">
        <option v-for="model in modelOptions" :value="model" :key="model">
          {{ model }}
        </option>
      </template>
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

    <AppSelect v-if="isMore" v-model="gearbox" id="gearbox" label="Gearbox">
      <option value="" hidden selected></option>
      <option
        v-for="gearboxOption in ['Automatic', 'Manual']"
        :value="gearboxOption"
        :key="gearboxOption"
      >
        {{ gearboxOption }}
      </option>
    </AppSelect>

    <AppSelect v-if="isMore" v-model="fuel" id="fuel" label="Fuel">
      <option value="" hidden selected></option>
      <option
        v-for="fuelOption in ['Diesel', 'Electric', 'Gasoline', 'Hybrid']"
        :value="fuelOption"
        :key="fuelOption"
      >
        {{ fuelOption }}
      </option>
    </AppSelect>

    <p class="col-span-2 flex justify-between">
      <AppButton
        before="tune"
        appearance="secondary"
        size="36"
        @click="isMore = true"
        >More options</AppButton
      >

      <AppButton
        before="restore"
        appearance="secondary"
        size="36"
        @click="reset"
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
import { defineComponent, ref, watch } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppSelect from "@/components/AppSelect/AppSelect.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { useMakes, useModels } from "@/services/make-models/adapter.ts";
import { useCarsSearch } from "@/composable/cars-search";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AppSearch",

  components: {
    AppInput,
    AppSelect,
    AppButton,
  },

  emits: {
    submit: null,
  },

  setup: (props, { emit }) => {
    const router = useRouter();

    const isMore = ref(false);

    const {
      make,
      model,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      minMileage,
      maxMileage,
      gearbox,
      fuel,
    } = useCarsSearch();

    //#region makes
    const { data: makeOptions, send: getMakeOptions } = useMakes();
    getMakeOptions();
    //#endregion

    //#region models
    const {
      data: modelOptions,
      isLoading: areModelOptionsLoading,
      send: getModelOptions,
    } = useModels();

    if (make.value) {
      getModelOptions(make.value);
    }

    watch(make, () => {
      model.value = "";
      if (make.value) {
        getModelOptions(make.value);
      }
    });
    //#endregion

    const reset = () => {
      make.value = null;
      model.value = null;
      minPrice.value = null;
      maxPrice.value = null;
      minYear.value = null;
      maxYear.value = null;
      minMileage.value = null;
      maxMileage.value = null;
      gearbox.value = null;
      fuel.value = null;
    };

    return {
      make,
      makeOptions,
      model,
      modelOptions,
      areModelOptionsLoading,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      minMileage,
      maxMileage,
      gearbox,
      fuel,
      isMore,
      reset,
      onSubmit: () => {
        router.push({
          name: "Cars",
        });
        emit("submit");
      },
    };
  },
});
</script>

<style scoped></style>
