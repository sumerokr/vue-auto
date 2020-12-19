<template>
  <li class="shadow-1 rounded overflow-hidden">
    <RouterLink :to="{ name: 'Car', params: { id: car.id } }">
      <p>
        <img
          class="w-full"
          :src="car.images[0]['320']"
          :srcset="`
            ${car.images[0]['320']}   320w,
            ${car.images[0]['640']}   640w,
            ${car.images[0]['960']}   960w,
            ${car.images[0]['1280']} 1280w,
            ${car.images[0]['1600']} 1600w,
            ${car.images[0]['1920']} 1920w
          `"
          sizes="
            (min-width: 1952px) 1920px,
            (min-width: 1312px) 1600px,
            (min-width: 992px)  1280px,
            (min-width: 672px)  960px,
            (min-width: 352px)  640px,
            320px
          "
          width="320"
          height="240"
          alt=""
        />
      </p>
      <div class="p-2">
        <p class="flex font-medium items-center justify-between">
          {{ numberFormatter.format(car.price) }} €
          <span class="material-icons opacity-60">bookmark_border</span>
        </p>
        <h2 class="text-sm mb-2 opacity-60">{{ car.brand }} {{ car.model }}</h2>

        <p class="mb-2 text-xs opacity-60">
          {{ car.year }} / {{ numberFormatter.format(car.mileage) }} km /
          {{ car.gearbox }}
        </p>

        <ul class="flex flex-wrap mb-2 gap-1" v-if="Math.random() < 0.4">
          <li
            class="px-1 bg-red-100 text-black text-xs text-opacity-60 rounded-sm"
          >
            First owner
          </li>
          <li
            class="px-1 bg-blue-100 text-black text-xs text-opacity-60 rounded-sm"
            v-if="Math.random() < 0.3"
          >
            Second owner
          </li>
          <li
            class="px-1 bg-green-100 text-black text-xs text-opacity-60 rounded-sm"
            v-if="Math.random() < 0.3"
          >
            Zero crashes
          </li>
        </ul>

        <p class="flex items-start">
          <span
            class="mr-0.5 material-icons opacity-60"
            style="font-size: 12px; padding: 2px"
            >{{
              car.price % 2 === 0 || car.price % 3 === 0 ? "person" : "business"
            }}</span
          ><span class="text-xs opacity-60">{{
            car.price % 2 === 0 || car.price % 3 === 0
              ? f.name.firstName()
              : f.company.companyName()
          }}</span>
          <span
            class="ml-auto mr-0.5 material-icons opacity-60"
            style="font-size: 12px; padding: 2px"
            >place</span
          >
          <span class="text-xs opacity-60">{{ car.city }}</span>
        </p>
      </div>
    </RouterLink>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import f from "faker";

export default defineComponent({
  name: "CarListItemFour",

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
