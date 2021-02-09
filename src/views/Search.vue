<template>
  <div class="p-4">
    <h1 class="text-2xl mb-8">Search for a car</h1>

    <AppSearch
      :initial-search-params="composableSearchParams"
      @update="onUpdate"
      @submit="onSubmit"
    >
      <template #footer>
        <AppButton
          before="search"
          appearance="primary"
          size="48"
          type="submit"
          is-block
          >Search</AppButton
        >
      </template>
    </AppSearch>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppSearch from "@/components/AppSearch/AppSearch.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { useRouter } from "vue-router";
import { useCarsSearch } from "@/composable/cars-search";
import { searchParams } from "@/types.ts";

export default defineComponent({
  name: "Search",

  components: {
    AppSearch,
    AppButton,
  },

  setup: () => {
    const router = useRouter();

    const composableSearchParams = useCarsSearch();

    const onUpdate = () => {
      //
    };

    const onSubmit = (submittedSearchParams: searchParams) => {
      Object.assign(composableSearchParams, submittedSearchParams);
      router.push({
        name: "Cars",
      });
    };

    return {
      composableSearchParams,
      onUpdate,
      onSubmit,
    };
  },
});
</script>

<style scoped></style>
