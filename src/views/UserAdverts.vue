<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">My adverts</h1>

    <ul class="space-y-4">
      <li
        class="border-b-4 border-solid border-gray-200 pb-4"
        v-for="(car, index) in cars"
        :key="car.id"
      >
        <router-link
          class="flex py-2"
          :to="{ name: 'Car', params: { id: car.id } }"
        >
          <div class="flex-1">
            <div class="pr-4">
              <img
                class="max-w-full mr-4"
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
          </div>
          <div class="flex-1 flex-grow">
            <h2>{{ car.brand }} {{ car.model }}, {{ car.year }}</h2>
            <p class="text-xl mb-2">
              {{ numberFormatter.format(car.price) }} €
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
  name: "UserAdverts",

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
