<template>
  <form class="grid grid-cols-2 gap-4" @submit.prevent="onSubmit">
    <AppSelect v-model="make" id="make" label="Make">
      <option :value="null" hidden selected></option>
      <option v-for="make in makeOptions" :value="make" :key="make">
        {{ make }}
      </option>
    </AppSelect>

    <AppSelect
      v-model="model"
      id="model"
      label="Model"
      :disabled="make === null || areModelOptionsLoading === true"
      :loading="areModelOptionsLoading === true"
    >
      <option :value="null" hidden selected></option>
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
        @click="isMore = !isMore"
        >{{ isMore ? "Less" : "More" }} options</AppButton
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
      <slot name="footer"></slot>
    </div>
  </form>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  unref,
  reactive,
  toRefs,
  watch,
  PropType,
} from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppSelect from "@/components/AppSelect/AppSelect.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { useMakes, useModels } from "@/services/make-models/adapter.ts";
import { searchParams } from "@/types";

export default defineComponent({
  name: "AppSearch",

  components: {
    AppInput,
    AppSelect,
    AppButton,
  },

  props: {
    initialSearchParams: {
      // TODO: type checking doesn't work
      type: Object as PropType<searchParams>,
    },
  },

  emits: {
    update: null,
    submit: null,
  },

  setup: (props, { emit }) => {
    const isMore = ref(false);

    const defaultSearchParams: searchParams = {
      make: null,
      model: null,
      minPrice: null,
      maxPrice: null,
      minYear: null,
      maxYear: null,
      minMileage: null,
      maxMileage: null,
      gearbox: null,
      fuel: null,
    };

    const resolvedSearchParams = {
      ...defaultSearchParams,
      ...props.initialSearchParams,
    };

    const $searchParams = reactive(resolvedSearchParams);

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

    if ($searchParams.make) {
      getModelOptions($searchParams.make);
    }

    watch(
      () => $searchParams.make,
      () => {
        $searchParams.model = "";
        if ($searchParams.make) {
          getModelOptions($searchParams.make);
        }
      }
    );
    //#endregion

    const reset = () => {
      Object.assign($searchParams, defaultSearchParams);
    };

    watch($searchParams, () => {
      emit("update", $searchParams);
    });

    const onSubmit = () => {
      emit("submit", $searchParams);
    };

    return {
      ...toRefs($searchParams),
      makeOptions,
      modelOptions,
      areModelOptionsLoading,
      isMore,
      reset,
      onSubmit,
    };
  },
});
</script>

<style scoped></style>
