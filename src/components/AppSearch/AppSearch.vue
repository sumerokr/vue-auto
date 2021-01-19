<template>
  <form class="grid grid-cols-2 gap-4" @submit.prevent="onSearch">
    <AppSelect v-model="make" id="make" label="Make">
      <option value="" hidden selected></option>
      <option v-for="make in makeOptions" :value="make" :key="make">
        {{ make }}
      </option>
    </AppSelect>

    <AppSelect v-model="model" id="model" label="Model" :disabled="make === ''">
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
import { defineComponent, ref, watch } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppSelect from "@/components/AppSelect/AppSelect.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { useRouter } from "vue-router";
import { getMakes, getModels } from "@/services/make-models";

export default defineComponent({
  name: "AppSearch",

  components: {
    AppInput,
    AppSelect,
    AppButton,
  },

  setup: () => {
    const router = useRouter();
    const isMore = ref(false);

    //#region makes
    const make = ref("");
    const makeOptions = ref<string[]>([]);
    const getMakeOptions = async () => {
      makeOptions.value = await getMakes();
    };
    getMakeOptions();
    //#endregion

    //#region models
    const model = ref("");
    const modelOptions = ref<string[]>([]);
    const getModelOptions = async () => {
      modelOptions.value = await getModels(make.value);
    };

    watch(make, () => {
      model.value = "";
      getModelOptions();
    });
    //#endregion

    const minPrice = ref("");
    const maxPrice = ref("");
    const minYear = ref("");
    const maxYear = ref("");
    const minMileage = ref("");
    const maxMileage = ref("");

    return {
      make,
      makeOptions,
      model,
      modelOptions,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      minMileage,
      maxMileage,
      isMore,
      onSearch: () => {
        router.push({
          name: "Cars",
        });
      },
    };
  },
});
</script>

<style scoped></style>
