<template>
  <li class="border-b border-solid border-gray-200 pb-4">
    <router-link class="block" :to="{ name: 'Car', params: { id: car.id } }">
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
              ${image['1600']} 1600w,
              ${image['1920']} 1920w
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarListItemTwo",

  props: {
    car: {
      type: Object,
      required: true,
    },
  },

  setup: () => {
    return {
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>
