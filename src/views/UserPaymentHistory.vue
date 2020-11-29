<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Payment history</h1>

    <ul>
      <li class="py-2">
        <div class="flex items-baseline">
          <h2 class="text-xl">10 ads</h2>
          <div class="ml-2 mr-2 border-dotted border-b-2 flex-grow"></div>
          <p class="text-lg">12 €</p>
        </div>
        <p class="text-xs text-gray-400">20.11.2020</p>
      </li>
      <li class="py-2">
        <div class="flex items-baseline">
          <h2 class="text-xl">25 ads</h2>
          <div class="ml-2 mr-2 border-dotted border-b-2 flex-grow"></div>
          <p class="text-lg">25 €</p>
        </div>
        <p class="text-xs text-gray-400">20.11.2020</p>
      </li>
      <li class="py-2">
        <div class="flex items-baseline">
          <h2 class="text-xl">100 ads</h2>
          <div class="ml-2 mr-2 border-dotted border-b-2 flex-grow"></div>
          <p class="text-lg">60 €</p>
        </div>
        <p class="text-xs text-gray-400">20.11.2020</p>
      </li>
      <li class="py-2">
        <div class="flex items-baseline">
          <h2 class="text-xl">50 ads</h2>
          <div class="ml-2 mr-2 border-dotted border-b-2 flex-grow"></div>
          <p class="text-lg">40 €</p>
        </div>
        <p class="text-xs text-gray-400">20.11.2020</p>
      </li>
      <li class="py-2">
        <div class="flex items-baseline">
          <h2 class="text-xl">25 ads</h2>
          <div class="ml-2 mr-2 border-dotted border-b-2 flex-grow"></div>
          <p class="text-lg">25 €</p>
        </div>
        <p class="text-xs text-gray-400">20.11.2020</p>
      </li>
    </ul>

    <div v-if="activeTab === 'new'">
      <ul class="space-y-4">
        <li class="border border-gray-100 p-4 rounded shadow">
          <h2 class="text-center text-3xl">10 ads</h2>
          <p class="text-center mb-4">
            <span class="text-xl">12 €</span>
            <span class="text-gray-400"> ({{ 12 / 10 }} € / ad)</span>
          </p>
          <ul class="mb-4">
            <li>- Watch premium Vue courses</li>
            <li>- New tutorials released weekly</li>
            <li>- Donate to the Vue.js project</li>
          </ul>
          <p class="text-center">
            <button
              class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
              type="button"
            >
              <span class="material-icons align-top mr-3">shopping_cart</span>
              Buy 10 items
            </button>
          </p>
        </li>

        <li class="border border-gray-100 p-4 rounded shadow">
          <h2 class="text-center text-3xl">25 ads</h2>
          <p class="text-center mb-4">
            <span class="text-xl">25 €</span>
            <span class="text-gray-400"> ({{ 25 / 25 }} € / ad)</span>
          </p>
          <ul class="mb-4">
            <li>- Watch premium Vue courses</li>
            <li>- New tutorials released weekly</li>
            <li>- Donate to the Vue.js project</li>
          </ul>
          <p class="text-center">
            <button
              class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
              type="button"
            >
              <span class="material-icons align-top mr-3">shopping_cart</span>
              Buy 25 items
            </button>
          </p>
        </li>

        <li class="border border-gray-100 p-4 rounded shadow">
          <h2 class="text-center text-3xl">50 ads</h2>
          <p class="text-center mb-4">
            <span class="text-xl">40 €</span>
            <span class="text-gray-400"> ({{ 40 / 50 }} € / ad)</span>
          </p>
          <ul class="mb-4">
            <li>- Watch premium Vue courses</li>
            <li>- New tutorials released weekly</li>
            <li>- Donate to the Vue.js project</li>
          </ul>
          <p class="text-center">
            <button
              class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
              type="button"
            >
              <span class="material-icons align-top mr-3">shopping_cart</span>
              Buy 50 items
            </button>
          </p>
        </li>

        <li class="border border-gray-100 p-4 rounded shadow">
          <h2 class="text-center text-3xl">100 ads</h2>
          <p class="text-center mb-4">
            <span class="text-xl">60 €</span>
            <span class="text-gray-400"> ({{ 60 / 100 }} € / ad)</span>
          </p>
          <ul class="mb-4">
            <li>- Watch premium Vue courses</li>
            <li>- New tutorials released weekly</li>
            <li>- Donate to the Vue.js project</li>
          </ul>
          <p class="text-center">
            <button
              class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
              type="button"
            >
              <span class="material-icons align-top mr-3">shopping_cart</span>
              Buy 100 items
            </button>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserPaymentHistory",
});
</script>
