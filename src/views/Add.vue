<template>
  <div>
    <div class="p-4">
      <h1 class="text-3xl">Sell my car</h1>
      <p class="text-black text-opacity-60">
        The quickiest way to sell the car
      </p>
    </div>

    <div class="bg-white p-4">
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

        <AppSelect v-model="year" id="year" label="Year">
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
          v-model="mileage"
          label="Mileage, km"
          type="number"
          id="mileage"
        />

        <AppSelect v-model="gearbox" id="gearbox" label="Gearbox">
          <option value="" hidden selected></option>
          <option
            v-for="gearboxOption in ['Automatic', 'Manual']"
            :value="gearboxOption"
            :key="gearboxOption"
          >
            {{ gearboxOption }}
          </option>
        </AppSelect>

        <AppSelect v-model="fuel" id="fuel" label="Fuel">
          <option value="" hidden selected></option>
          <option
            v-for="fuelOption in ['Diesel', 'Electric', 'Gasoline', 'Hybrid']"
            :value="fuelOption"
            :key="fuelOption"
          >
            {{ fuelOption }}
          </option>
        </AppSelect>

        <div class="col-span-2">
          <AppButton
            before="save"
            appearance="primary"
            size="48"
            type="submit"
            is-block
            >Save</AppButton
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import AppSelect from "@/components/AppSelect/AppSelect.vue";
import { useMakes, useModels } from "@/services/make-models/adapter.ts";

export default defineComponent({
  name: "AppSearch",

  components: {
    AppInput,
    AppSelect,
    AppButton,
  },

  emits: {
    update: null,
    submit: null,
  },

  setup: () => {
    const defaultParams = {
      make: null,
      model: null,
      year: null,
      mileage: null,
      gearbox: null,
      fuel: null,
    };

    const $params = reactive(defaultParams);

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

    if ($params.make) {
      getModelOptions($params.make);
    }

    watch(
      () => $params.make,
      () => {
        $params.model = null;
        if ($params.make) {
          getModelOptions($params.make);
        }
      }
    );
    //#endregion

    const onSubmit = () => {
      //
    };

    return {
      ...toRefs($params),
      makeOptions,
      modelOptions,
      areModelOptionsLoading,
      onSubmit,
    };
  },
});
</script>

<style scoped></style>
