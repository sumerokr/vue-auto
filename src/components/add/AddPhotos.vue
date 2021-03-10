<template>
  <h2 class="text-2xl mb-6">Photos</h2>
  <div class="grid gap-4">
    <div class="col-span-2 border p-2">
      <div class="bg-gray-100" style="aspect-ratio: 16/9"></div>
    </div>
    <div class="border p-2" v-for="n in 10" :key="n">
      <div class="bg-gray-100" style="aspect-ratio: 16/9"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddDetails",

  components: {},

  setup: () => {
    //
  },
});
</script>

<style scoped></style>
