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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserPaymentHistory",
});
</script>
