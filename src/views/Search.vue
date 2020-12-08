<template>
  <div class="p-4">
    <h1 class="text-2xl mb-8" @click="hideSelector">Search for a car</h1>

    <form @submit.prevent="onSearch">
      <button
        class="border-2 border-gray-200 rounded bg-white px-4 py-2 w-full flex"
        type="button"
        @click="showSelector"
      >
        <span class="material-icons text-black text-opacity-60 mr-3"
          >directions_car</span
        >
        <span class="text-black text-opacity-90">Make, model</span>
        <span class="material-icons text-black text-opacity-60 ml-auto"
          >search</span
        >
      </button>

      <transition name="slide">
        <div
          v-if="isSelectorVisible"
          class="fixed right-0 bottom-0 left-0 z-50 bg-white rounded-t flex flex-col"
          :style="`
            top: 120px;
            box-shadow: 0 -2px 6px 0 hsla(0, 0%, 0%, 0.1);
          `"
        >
          <div class="p-4">
            <input
              class="border-2 border-gray-200 bg-gray-50 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
              type="text"
              id="make"
            />
          </div>
          <div class="flex-grow p-4 overflow-y-auto">
            <ul>
              <li v-for="post in posts" :key="post.id" class="flex py-3">
                <span class="flex-grow">{{ post.title.slice(0, 20) }}</span>
                <span class="material-icons p-3 -my-3">expand_more</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 flex justify-end">
            <button
              class="text-black text-opacity-60 px-4 py-2 rounded mr-4 font-medium"
              type="submit"
            >
              Cancel
            </button>
            <button
              class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </transition>

      <br />
      <!-- <label for="brand">Make</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="text"
        id="make"
      /><br /><br />

      <label for="model">Model</label><br />
      <input
        class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
        type="text"
        id="model"
      /><br /><br /> -->

      <!-- <div class="flex space-x-4">
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
      </div> -->

      <!-- <br /> -->

      <!-- <div class="flex space-x-4">
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
      </div> -->

      <!-- <br /> -->

      <div class="flex space-x-4">
        <div class="flex-1">
          <label for="model">Min prce</label><br />
          <input
            class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            type="number"
            id="model"
          />
        </div>
        <div class="flex-1">
          <label for="model">Max price</label><br />
          <input
            class="border-2 border-gray-200 rounded focus:outline-none focus:border-blue-400 p-2 w-full"
            type="number"
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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { posts } from "@/faker/posts.ts";

export default defineComponent({
  name: "Search",

  setup: () => {
    const router = useRouter();
    const isSelectorVisible = ref(true);

    return {
      posts,
      isSelectorVisible,
      onSearch: () => {
        router.push({
          name: "Cars",
        });
      },
      showSelector: () => {
        isSelectorVisible.value = true;
      },
      hideSelector: () => {
        isSelectorVisible.value = false;
      },
    };
  },
});
</script>

<style scoped>
.slide-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}
</style>
