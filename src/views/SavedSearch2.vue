<template>
  <div class="cars p-4">
    <h1 class="text-3xl mb-8">Saved search</h1>

    <AppInput v-model="searchName" label="Search name" id="min-price" />

    <br />

    <AppSearch @submit="onSubmit">
      <template #footer>
        <AppButton
          before="search"
          appearance="primary"
          size="48"
          type="submit"
          is-block
          >Save</AppButton
        >
      </template>
    </AppSearch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppSearch from "@/components/AppSearch/AppSearch.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SavedSearch2",

  components: {
    AppSearch,
    AppButton,
    AppInput,
  },

  setup: () => {
    const searchName = ref("My saved search");

    const router = useRouter();

    return {
      searchName,
      onSubmit: () => {
        router.push({
          name: "SavedSearch",
        });
      },
    };
  },
});
</script>

<style scoped></style>
