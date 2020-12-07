<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Cars</h1>

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
      <li
        class="rounded"
        v-for="car in cars"
        :key="car.id"
        :style="`
          box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        `"
      >
        <div class="p-4">
          <h2>{{ car.brand }} {{ car.model }}, {{ car.year }}</h2>
          <p class="text-xl">{{ numberFormatter.format(car.price) }} €</p>
        </div>
        <div>
          <p>
            <img
              class="w-full"
              src="https://via.placeholder.com/320x240"
              :srcset="`
                https://via.placeholder.com/320x240   320w,
                https://via.placeholder.com/640x480   640w,
                https://via.placeholder.com/960x720   960w,
                https://via.placeholder.com/1280x960 1280w,
                https://via.placeholder.com/1600x1200 1600w
              `"
              :sizes="`
                (max-width: 353px)   320px,
                (max-width: 673px)   640px,
                (max-width: 993px)   960px,
                (max-width: 1313px) 1280px,
                (max-width: 1633px) 1600px,
                320px
              `"
              width="320"
              height="240"
              alt=""
            />
          </p>
        </div>
        <div class="p-4 pb-2">
          <ul class="mb-4" style="columns: 2">
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
          <div class="flex -ml-2 items-center">
            <i class="material-icons p-2 text-black text-opacity-60">person</i>
            <span>John Doe</span>
            <i class="material-icons p-2 text-black text-opacity-60 ml-auto"
              >phone</i
            >
            <i class="material-icons p-2 text-black text-opacity-60"
              >bookmark</i
            >
          </div>
        </div>
      </li>

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
          <ul class="mb-4" style="columns: 2">
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
        <p class="flex items-center">
          <span class="mr-3 material-icons">{{
            car.price % 2 === 0 || car.price % 3 === 0 ? "person" : "business"
          }}</span>
          <span class="mr-3">John Doe</span>
          <button class="border-2 border-gray-200 px-2 py-2 rounded">
            <span class="material-icons align-top">call</span>
          </button>
          <button class="ml-auto border-2 border-gray-200 px-2 py-2 rounded">
            <span class="material-icons align-top">bookmark_border</span>
          </button>
        </p>
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
