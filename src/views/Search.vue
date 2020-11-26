<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Search</h1>

    <form @submit.prevent="onSearch">
      <label for="brand">Brand</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="text"
        id="brand"
      /><br /><br />

      <label for="model">Model</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="text"
        id="model"
      /><br /><br />

      <div class="flex space-x-4">
        <div class="flex-1">
          <label for="model">Min year</label><br />
          <select
            class="border-2 border-gray-200 bg-transparent rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            id="model"
          >
            <option
              v-for="year in new Array(20)
                .fill(null)
                .map((item, index) => 2020 - index)"
              :value="year"
              :key="year"
            >
              {{ year }}
            </option>
          </select>
        </div>
        <div class="flex-1">
          <label for="model">Max year</label><br />
          <select
            class="border-2 border-gray-200 bg-transparent rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            id="model"
          >
            <option
              v-for="year in new Array(20)
                .fill(null)
                .map((item, index) => 2020 - index)"
              :value="year"
              :key="year"
            >
              {{ year }}
            </option>
          </select>
        </div>
      </div>

      <br />

      <div class="flex space-x-4">
        <div class="flex-1">
          <label for="model">Min mileage</label><br />
          <input
            class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            type="text"
            id="model"
          />
        </div>
        <div class="flex-1">
          <label for="model">Max mileage</label><br />
          <input
            class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            type="text"
            id="model"
          />
        </div>
      </div>

      <br />

      <div class="flex space-x-4">
        <div class="flex-1">
          <label for="model">Min prce</label><br />
          <input
            class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            type="text"
            id="model"
          />
        </div>
        <div class="flex-1">
          <label for="model">Max price</label><br />
          <input
            class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            type="text"
            id="model"
          />
        </div>
      </div>

      <br />

      <button
        class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Search",

  setup: () => {
    const router = useRouter();

    return {
      onSearch: () => {
        router.push({
          name: "Cars",
        });
      },
    };
  },
});
</script>
