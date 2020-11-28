<template>
  <div class="p-4" v-if="car">
    <h1 class="text-3xl mb-8">Car</h1>
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
          @click="activateGallery"
        />
      </li>
      <li class="flex-shrink-0 w-3">&nbsp;</li>
    </ul>

    <div
      v-if="isGalleryActive"
      class="fixed z-50 inset-0 bg-black bg-opacity-50 mb-0 flex items-center"
      @click.self="deactivateGallry"
    >
      <ul
        class="flex overflow-x-scroll space-x-0"
        style="scroll-snap-type: x mandatory; scroll-padding-left: 0"
      >
        <li
          v-for="(image, index) in car.images"
          :key="image['320']"
          class="flex-shrink-0"
          style="scroll-snap-align: start"
        >
          <img
            class="w-full rounded"
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
            @click="activateGallery"
          />
        </li>
      </ul>
    </div>

    <h3 class="text-xl mb-2">Options</h3>
    <table>
      <tbody>
        <tr
          v-for="[key, val] in [
            ['Mileage', car.mileage],
            ['Type', car.type],
            ['Fuel', car.fuel],
            ['Color', car.color],
            ['Gearbox', car.gearbox],
            ['City', car.city],
            [
              'Registered till',
              dateFormatter.format(
                new Date(Date.now() + car.registeredTill.seconds)
              ),
            ],
            ['Drivetrain', car.drivetrain],
          ]"
          :key="key"
        >
          <td class="pr-8 text-black text-opacity-60">{{ key }}</td>
          <td class="text-black text-opacity-90">{{ val }}</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3 class="text-xl mb-2">Description</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id
      nibh tortor id aliquet. Nullam ac tortor vitae purus faucibus ornare.
      Lectus nulla at volutpat diam. Donec enim diam vulputate ut pharetra sit
      amet aliquam. Urna porttitor rhoncus dolor purus non enim praesent
      elementum. Nunc sed augue lacus viverra. Amet aliquam id diam maecenas
      ultricies. Tristique magna sit amet purus gravida quis. Rhoncus dolor
      purus non enim. Id faucibus nisl tincidunt eget. Purus semper eget duis at
      tellus.
    </p>

    <br />

    <h3 class="text-xl mb-2">Seller's name</h3>
    <p>
      <button
        class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
        type="button"
      >
        Call
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { firestore } from "@/firebase/firestore.ts";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Car",
  setup() {
    const isGalleryActive = ref(false);
    const route = useRoute();
    const car: Ref<any> = ref(null);

    const carRef = firestore.collection("cars").doc(String(route.params.id));

    carRef.get().then((doc) => {
      car.value = doc.data();
    });

    return {
      isGalleryActive,
      activateGallery: () => {
        isGalleryActive.value = true;
      },
      deactivateGallry: () => {
        isGalleryActive.value = false;
      },
      car,
      language: window.navigator.language,
      dateFormatter: new Intl.DateTimeFormat("ru-RU"),
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>
