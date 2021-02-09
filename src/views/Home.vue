<template>
  <div class="page">
    <h1 class="title text-3xl">Find you next car</h1>
    <div class="image"></div>

    <div class="search shadow-8">
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

    <div class="content text-black text-opacity-90">
      <h2 class="text-2xl mb-6">The way it should be</h2>
      <ul class="space-y-6">
        <li>
          <div class="flex">
            <div class="mr-4">
              <span class="my-3 material-icons text-black text-opacity-60"
                >house</span
              >
            </div>
            <div>
              <h3 class="font-medium">Do more from home</h3>
              <p>Curbside pickup and delivery options available</p>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div class="flex">
            <div class="mr-4">
              <span class="my-3 material-icons text-black text-opacity-60"
                >map</span
              >
            </div>
            <div>
              <h3 class="font-medium">Test drives for real life</h3>
              <p>24-hour take home test drives</p>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div class="flex">
            <div class="mr-4">
              <span class="my-3 material-icons text-black text-opacity-60"
                >event</span
              >
            </div>
            <div>
              <h3 class="font-medium">Love it or return it</h3>
              <p>30-day money back (up to 1500mi)</p>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div class="flex">
            <div class="mr-4">
              <span class="my-3 material-icons text-black text-opacity-60"
                >directions</span
              >
            </div>
            <div>
              <h3 class="font-medium">All major systems covered</h3>
              <p>For 90 days or 4,000 miles (whichever comes first)</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppSearch from "@/components/AppSearch/AppSearch.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { useCarsSearch } from "@/composable/cars-search";
import { useRouter } from "vue-router";
import { searchParams } from "@/types";

export default defineComponent({
  name: "Home",

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

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-template-rows: 1rem auto 50px auto auto 2rem;
}

.title {
  margin-top: 1rem;
  margin-bottom: 2rem;
  z-index: 1;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.image {
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  background-color: #f8f9d2;
  background-image: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);
}

.search {
  grid-column: 2 / 3;
  grid-row: 3 / 5;
  margin-bottom: 3rem;
  border-radius: 12px;
  padding: 1rem;
  background-color: #fff;
}

.content {
  grid-column: 2 / 3;
}
</style>
