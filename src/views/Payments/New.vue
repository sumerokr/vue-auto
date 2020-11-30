<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">New payment</h1>

    <form class="p-4 border border-gray-100 rounded shadow">
      <label for="email">Card number</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="email"
        id="email"
      /><br /><br />

      <div class="flex space-x-4">
        <div class="flex-1">
          <label for="date">Valid thru</label><br />
          <input
            class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            type="month"
            id="date"
          />
        </div>
        <div class="flex-1">
          <label for="cvc">CVC</label><br />
          <input
            class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            type="password"
            id="cvc"
          />
        </div>
      </div>
      <br />

      <label for="holder">Card holder</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="text"
        id="holder"
      /><br /><br />

      <div class="flex">
        <router-link
          class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
          :to="{ name: 'PaymentSuccess' }"
        >
          <span class="material-icons align-top mr-3">shopping_cart</span>
          Buy 50 ads
        </router-link>

        <router-link
          class="ml-auto border-2 border-gray-200 px-4 py-2 rounded text-opacity-90 font-medium text-left"
          :to="{ name: 'PaymentFailure' }"
        >
          Failure
        </router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaymentNew",
});
</script>
