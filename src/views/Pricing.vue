<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Pricing</h1>

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
          <router-link
            class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium inline-block"
            :to="{ name: 'PaymentNew' }"
          >
            <span class="material-icons align-top mr-3">shopping_cart</span>
            Buy 10 ads
          </router-link>
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
          <router-link
            class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium inline-block"
            :to="{ name: 'PaymentNew' }"
          >
            <span class="material-icons align-top mr-3">shopping_cart</span>
            Buy 25 ads
          </router-link>
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
          <router-link
            class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium inline-block"
            :to="{ name: 'PaymentNew' }"
          >
            <span class="material-icons align-top mr-3">shopping_cart</span>
            Buy 50 ads
          </router-link>
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
          <router-link
            class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium inline-block"
            :to="{ name: 'PaymentNew' }"
          >
            <span class="material-icons align-top mr-3">shopping_cart</span>
            Buy 100 ads
          </router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pricing",
});
</script>
