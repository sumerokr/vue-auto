<template>
  <div class="cars">
    <h1 class="text-3xl p-4">Saved search</h1>

    <ul class="grid gap-2">
      <li v-for="n in 5" :key="n">
        <SavedSearchListItem />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SavedSearchListItem from "@/components/SavedSearchListItem/SavedSearchListItem.vue";

export default defineComponent({
  name: "SavedSearch",

  components: {
    SavedSearchListItem,
  },
});
</script>

<style scoped></style>
