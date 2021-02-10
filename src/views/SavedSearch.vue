<template>
  <div class="cars p-4">
    <h1 class="text-3xl mb-8">Saved search</h1>

    <ul class="grid gap-4">
      <li v-for="n in 3" :key="n">
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
