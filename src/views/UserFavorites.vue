<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Favorites</h1>

    <ul class="flex space-x-4 mb-8">
      <li class="flex-1">
        <button
          class="border-2 border-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons align-top mr-3">filter_list</i>
          Filter
        </button>
      </li>
      <li class="flex-1">
        <button
          class="border-2 border-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons align-top mr-3">sort</i>
          Sort
        </button>
      </li>
    </ul>

    <ul class="space-y-4">
      <li class="shadow rounded" v-for="car in cars" :key="car.id">
        <router-link
          class="grid grid-cols-3 gap-4"
          :to="{ name: 'Car', params: { id: car.id } }"
        >
          <p class="col-span-1">
            <img
              class="max-w-full mr-4 rounded rounded-tr-none rounded-br-none"
              src="https://via.placeholder.com/320x240"
              :srcset="`
                https://via.placeholder.com/320x240.webp   320w,
                https://via.placeholder.com/640x480.webp   640w,
                https://via.placeholder.com/960x720.webp   960w,
                https://via.placeholder.com/1280x960.webp 1280w,
                https://via.placeholder.com/1600x1200.webp 1600w
              `"
              sizes="
                (max-width: 352px)  320px,
                (max-width: 672px)  640px,
                (max-width: 992px)  960px,
                (max-width: 1312px) 1280px,
                (max-width: 1632px) 1600px,
                320px
              "
              width="320"
              height="240"
              alt=""
            />
          </p>
          <div class="col-span-2 py-2">
            <h2>{{ car.brand }} {{ car.model }}, {{ car.year }}</h2>
            <p>{{ numberFormatter.format(car.price) }} €</p>
          </div>
        </router-link>
      </li>

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
