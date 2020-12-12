<template>
  <li class="shadow rounded overflow-hidden">
    <div>
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
      <div class="p-4">
        <p class="text-xl flex items-center justify-between">
          {{ numberFormatter.format(car.price) }} €
          <span class="material-icons">bookmark</span>
        </p>
        <h2 class="text-sm mb-3 opacity-60">{{ car.brand }} {{ car.model }}</h2>

        <p class="mb-3 text-sm opacity-60">
          {{ car.year }} / {{ numberFormatter.format(car.mileage) }} km /
          {{ car.gearbox }}
        </p>

        <p class="flex items-center">
          <span
            class="mr-3 material-icons opacity-60"
            style="font-size: 18px"
            >{{
              car.price % 2 === 0 || car.price % 3 === 0 ? "person" : "business"
            }}</span
          ><span class="text-sm opacity-60">{{
            car.price % 2 === 0 || car.price % 3 === 0
              ? f.name.firstName()
              : f.company.companyName()
          }}</span>
        </p>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import f from "faker";

export default defineComponent({
  name: "CarListItemOne",

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
