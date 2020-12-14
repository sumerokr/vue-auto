<template>
  <li class="-mx-4 p-4 relative shadow">
    <RouterLink :to="{ name: 'Car', params: { id: car.id } }">
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
            :src="car.images[index]['320']"
            :srcset="`
              ${car.images[index]['320']}   320w,
              ${car.images[index]['640']}   640w,
              ${car.images[index]['960']}   960w,
              ${car.images[index]['1280']} 1280w,
              ${car.images[index]['1600']} 1600w,
              ${car.images[index]['1920']} 1920w
            `"
            sizes="
              300px
            "
            width="300"
            height="225"
            alt=""
            :loading="index > 0 ? 'lazy' : 'auto'"
          />
        </li>
        <li class="flex-shrink-0 w-3">&nbsp;</li>
      </ul>
      <p class="text-xl flex items-center justify-between">
        {{ numberFormatter.format(car.price) }} €
        <span class="material-icons opacity-60">bookmark_border</span>
      </p>
      <h2 class="text-sm mb-4 opacity-60">{{ car.brand }} {{ car.model }}</h2>

      <p class="mb-4 text-sm opacity-60">
        {{ car.year }} / {{ numberFormatter.format(car.mileage) }} km /
        {{ car.gearbox }}
      </p>

      <ul class="flex flex-wrap mb-4 gap-1" v-if="Math.random() < 0.4">
        <li
          class="px-2 py-0.5 bg-red-100 text-black text-sm text-opacity-60 rounded"
        >
          First owner
        </li>
        <li
          class="px-2 py-0.5 bg-blue-100 text-black text-sm text-opacity-60 rounded"
          v-if="Math.random() < 0.3"
        >
          Second owner
        </li>
        <li
          class="px-2 py-0.5 bg-green-100 text-black text-sm text-opacity-60 rounded"
          v-if="Math.random() < 0.3"
        >
          Zero crashes
        </li>
      </ul>

      <p class="flex items-start">
        <span
          class="mr-3 material-icons opacity-60"
          style="font-size: 18px; padding: 1px"
          >{{
            car.price % 2 === 0 || car.price % 3 === 0 ? "person" : "business"
          }}</span
        ><span class="text-sm opacity-60">{{
          car.price % 2 === 0 || car.price % 3 === 0
            ? f.name.firstName()
            : f.company.companyName()
        }}</span>
        <span
          class="ml-auto mr-3 material-icons opacity-60"
          style="font-size: 18px; padding: 1px"
          >place</span
        >
        <span class="text-sm opacity-60">Podgorica</span>
      </p>
    </RouterLink>
    <span
      class="absolute right-0 -bottom-4 left-0 h-4 bg-gray-100"
      style="z-index: -1"
    ></span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import f from "faker";

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
      f,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>
