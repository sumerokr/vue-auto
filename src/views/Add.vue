<template>
  <div>
    <div class="p-4">
      <h1 class="text-3xl">Sell my car</h1>
      <p class="text-black text-opacity-60">
        The quickiest way to sell the car
      </p>
    </div>

    <div class="bg-white shadow-0 p-4">
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

        <!-- options -->
        <h2 class="col-span-2 mt-4 text-2xl">Options</h2>

        <div class="col-span-2 space-y-6">
          <div>
            <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
              Comfort
            </h4>
            <ul class="-mx-4">
              <AppListItemInteractive
                v-for="item in optionContent.find(
                  (oc) => oc.category === 'Comfort'
                ).items"
                :key="item"
                @click="onCheck('comfort', item)"
              >
                <template #before>
                  <IconButton
                    type="button"
                    :icon="
                      comfort.includes(item)
                        ? 'check_box'
                        : 'check_box_outline_blank'
                    "
                  />
                </template>
                {{ item }}
              </AppListItemInteractive>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
              Multimedia
            </h4>
            <ul class="-mx-4">
              <AppListItemInteractive
                v-for="item in optionContent.find(
                  (oc) => oc.category === 'Multimedia'
                ).items"
                :key="item"
                @click="onCheck('multimedia', item)"
              >
                <template #before>
                  <IconButton
                    type="button"
                    :icon="
                      multimedia.includes(item)
                        ? 'check_box'
                        : 'check_box_outline_blank'
                    "
                  />
                </template>
                {{ item }}
              </AppListItemInteractive>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
              Safety
            </h4>
            <ul class="-mx-4">
              <AppListItemInteractive
                v-for="item in optionContent.find(
                  (oc) => oc.category === 'Safety'
                ).items"
                :key="item"
                @click="onCheck('safety', item)"
              >
                <template #before>
                  <IconButton
                    type="button"
                    :icon="
                      safety.includes(item)
                        ? 'check_box'
                        : 'check_box_outline_blank'
                    "
                  />
                </template>
                {{ item }}
              </AppListItemInteractive>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
              Extra
            </h4>
            <ul class="-mx-4">
              <AppListItemInteractive
                v-for="item in optionContent.find(
                  (oc) => oc.category === 'Extra'
                ).items"
                :key="item"
                @click="onCheck('extra', item)"
              >
                <template #before>
                  <IconButton
                    type="button"
                    :icon="
                      extra.includes(item)
                        ? 'check_box'
                        : 'check_box_outline_blank'
                    "
                  />
                </template>
                {{ item }}
              </AppListItemInteractive>
            </ul>
          </div>
        </div>

        <!-- options -->

        <div class="col-span-2">
          <AppButton
            after="arrow_forward"
            appearance="primary"
            size="48"
            type="submit"
            is-block
            >Next</AppButton
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
import IconButton from "@/components/IconButton/IconButton.vue";
import AppListItemInteractive from "@/components/AppList/AppListItemInteractive.vue";
import { optionContent } from "@/db/index.ts";
import { useMakes, useModels } from "@/services/make-models/adapter.ts";

export default defineComponent({
  name: "AppSearch",

  components: {
    AppInput,
    AppSelect,
    AppButton,
    AppListItemInteractive,
    IconButton,
  },

  setup: () => {
    type defaultParams = {
      [index: string]: any;
      make: null | string;
      model: null | string;
      year: null | number;
      mileage: null | number;
      gearbox: null | string;
      fuel: null | string;
      comfort: string[];
      multimedia: string[];
      safety: string[];
      extra: string[];
    };

    const defaultParams: defaultParams = {
      make: null,
      model: null,
      year: null,
      mileage: null,
      gearbox: null,
      fuel: null,
      comfort: [],
      multimedia: [],
      safety: [],
      extra: [],
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

    const onCheck = (option: string, item: string) => {
      $params[option].includes(item)
        ? $params[option].splice($params[option].indexOf(item), 1)
        : $params[option].push(item);
    };

    return {
      ...toRefs($params),
      makeOptions,
      modelOptions,
      areModelOptionsLoading,
      onSubmit,
      onCheck,
      optionContent,
    };
  },
});
</script>

<style scoped></style>
