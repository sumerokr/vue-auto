<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Cars</h1>

    <ul class="flex space-x-4 mb-8">
      <li class="flex-1">
        <button
          class="bg-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons-outlined align-middle mr-3">filter_list</i>
          Filter
        </button>
      </li>
      <li class="flex-1">
        <button
          class="bg-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons-outlined align-middle mr-3">sort</i>
          Sort
        </button>
      </li>
    </ul>

    <ul class="space-y-4">
      <li
        class="border-b border-solid border-gray-200 pb-4"
        v-for="car in cars"
        :key="car.id"
      >
        <router-link
          class="block"
          :to="{ name: 'Car', params: { id: car.id } }"
        >
          <h2>{{ car.brand }} {{ car.model }}, {{ car.year }}</h2>
          <p class="text-xl mb-2">{{ numberFormatter.format(car.price) }} €</p>
          <ul
            class="flex overflow-x-scroll -mx-4 mb-4 space-x-1"
            style="scroll-snap-type: x mandatory; scroll-padding-left: 1rem"
          >
            <li class="flex-shrink-0 w-3">&nbsp;</li>
            <li
              v-for="(image, index) in car.images"
              :key="image['320']"
              class="flex-shrink-0"
              style="
                scroll-snap-align: start;
                width: calc(100% - 2rem);
                max-width: 300px;
              "
            >
              <img
                class="max-w-full rounded"
                :src="image['320']"
                :srcset="`
                  ${image['320']}   320w,
                  ${image['640']}   640w,
                  ${image['960']}   960w,
                  ${image['1280']} 1280w,
                  ${image['1600']} 1600w
                `"
                width="320"
                height="240"
                alt=""
                :loading="index > 0 ? 'lazy' : 'auto'"
              />
            </li>
            <li class="flex-shrink-0 w-3">&nbsp;</li>
          </ul>
          <ul style="columns: 2">
            <li
              class="text-sm"
              v-for="item in [
                car.mileage,
                car.gearbox,
                car.color,
                car.fuel,
                car.drivetrain,
                car.type,
              ]"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { firestore } from "@/firebase/firestore.ts";

export default defineComponent({
  name: "Cars",

  setup: () => {
    const cars: Ref<object[]> = ref([]);
    const carsRef = firestore.collection("cars");
    carsRef
      .limit(20)
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
