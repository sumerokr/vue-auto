<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Favorites</h1>

    <ul class="flex space-x-4 mb-8">
      <li class="flex-1">
        <button
          class="border-2 border-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons-outlined align-top mr-3">filter_list</i>
          Filter
        </button>
      </li>
      <li class="flex-1">
        <button
          class="border-2 border-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons-outlined align-top mr-3">sort</i>
          Sort
        </button>
      </li>
    </ul>

    <ul class="space-y-4">
      <li
        class="border-b border-solid border-gray-200 pb-4"
        v-for="(car, index) in cars"
        :key="car.id"
      >
        <router-link
          class="flex py-2 space-x-4"
          :to="{ name: 'Car', params: { id: car.id } }"
        >
          <div class="flex-1">
            <img
              class="max-w-full mr-4 rounded"
              :src="car.images[0]['320']"
              :srcset="`
                  ${car.images[0]['320']}   320w,
                  ${car.images[0]['640']}   640w,
                  ${car.images[0]['960']}   960w,
                  ${car.images[0]['1280']} 1280w,
                  ${car.images[0]['1600']} 1600w
                `"
              width="320"
              height="240"
              alt=""
              :loading="index > 4 ? 'lazy' : 'auto'"
            />
          </div>
          <div class="flex-1 flex-grow flex flex-col">
            <h2>{{ car.brand }} {{ car.model }}, {{ car.year }}</h2>
            <p class="text-xl mb-2">
              {{ numberFormatter.format(car.price) }} €
            </p>
            <p class="text-black text-opacity-60 mt-auto">
              Expires in: 10 days
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { firestore } from "@/firebase/firestore.ts";

export default defineComponent({
  name: "UserFavorites",

  setup: () => {
    const cars: Ref<object[]> = ref([]);
    const carsRef = firestore.collection("cars");
    carsRef
      .limit(10)
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          cars.value.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });

    return {
      cars,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>
