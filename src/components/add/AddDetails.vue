<template>
  <h2 class="text-2xl mb-6">Details</h2>
  <div class="grid gap-4">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppSelect from "@/components/AppSelect/AppSelect.vue";

export default defineComponent({
  name: "AddDetails",

  components: {
    AppInput,
    AppSelect,
  },

  setup: () => {
    //
  },
});
</script>

<style scoped></style>
