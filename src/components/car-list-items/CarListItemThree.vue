<template>
  <li class="shadow-1 rounded overflow-hidden">
    <RouterLink :to="{ name: 'Car', params: { id: car.id } }">
      <div class="flex space-x-4">
        <div class="flex-1">
          <p class="pl-4 pt-4">
            <img
              class="w-full rounded"
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
                (min-width: 1361px)  960px,
                (min-width: 721px)  640px,
                300px
              "
              width="300"
              height="225"
              alt=""
            />
          </p>
        </div>
        <div class="flex-1">
          <div class="pt-4 pr-4">
            <p class="text-xl flex items-center justify-between">
              {{ numberFormatter.format(car.price) }} €
              <span class="material-icons opacity-60">bookmark_border</span>
            </p>
            <h2 class="text-sm mb-4 opacity-60">
              {{ car.brand }} {{ car.model }}
            </h2>

            <p class="text-sm opacity-60">
              {{ car.year }} / {{ numberFormatter.format(car.mileage) }} km /
              {{ car.gearbox }}
            </p>
          </div>
        </div>
      </div>

      <div class="p-4">
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
          <span class="text-sm opacity-60">{{ car.city }}</span>
        </p>
      </div>
    </RouterLink>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import f from "faker";

export default defineComponent({
  name: "CarListItemThree",

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
