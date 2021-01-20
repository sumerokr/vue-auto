<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">Buttons</h1>

    <h2 class="text-2xl mb-4">Empty</h2>
    <h3 class="text-lg">Default</h3>
    <div class="space-y-2">
      <AppSelect label="Default">
        <option v-for="n in 5" :value="n" :key="n">
          {{ n }}
        </option>
      </AppSelect>

      <h3 class="text-lg">Disabled</h3>
      <AppSelect label="Disabled" disabled>
        <option v-for="n in 5" :value="n" :key="n">
          {{ n }}
        </option>
      </AppSelect>

      <h3 class="text-lg">Icon before</h3>
      <AppSelect label="Icon before" before="person">
        <option v-for="n in 5" :value="n" :key="n">
          {{ n }}
        </option>
      </AppSelect>

      <h3 class="text-lg">Disabled with icons</h3>
      <AppSelect disabled before="person">
        <option v-for="n in 5" :value="n" :key="n">
          {{ n }}
        </option>
      </AppSelect>
    </div>

    <br />
    <br />

    <h2 class="text-2xl mb-4">With value</h2>
    <h3 class="text-lg">Default</h3>
    <div class="space-y-2">
      <AppSelect label="Default" model-value="4">
        <option v-for="n in 5" :value="n" :key="n">
          {{ n }}
        </option>
      </AppSelect>

      <h3 class="text-lg">Disabled</h3>
      <AppSelect label="Disabled" disabled model-value="4">
        <option v-for="n in 5" :value="n" :key="n">
          {{ n }}
        </option>
      </AppSelect>

      <h3 class="text-lg">Icon before</h3>
      <AppSelect label="Icon before" before="person" model-value="4">
        <option v-for="n in 5" :value="n" :key="n">
          {{ n }}
        </option>
      </AppSelect>

      <h3 class="text-lg">Disabled with icons</h3>
      <AppSelect disabled before="person" model-value="4">
        <option v-for="n in 5" :value="n" :key="n">
          {{ n }}
        </option>
      </AppSelect>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppSelect from "@/components/AppSelect/AppSelect.vue";

export default defineComponent({
  name: "KitAppSelects",

  components: { AppSelect },
});
</script>

<style scoped></style>
