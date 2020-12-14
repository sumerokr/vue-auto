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
              dateFormatter.format(new Date(car.registeredTill)),
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

    <p class="text-lg mb-4">
      Lato is a sans serif typeface family started in the summer of 2010 by
      Warsaw-based designer Łukasz Dziedzic (“Lato” means “Summer” in Polish).
      In December 2010 the Lato family was published under the Open Font License
      by his foundry tyPoland, with support from Google.
    </p>

    <p class="text-base mb-4">
      In the last ten or so years, during which Łukasz has been designing type,
      most of his projects were rooted in a particular design task that he
      needed to solve. With Lato, it was no different. Originally, the family
      was conceived as a set of corporate fonts for a large client — who in the
      end decided to go in different stylistic direction, so the family became
      available for a public release.
    </p>

    <p class="text-sm mb-4">
      When working on Lato, Łukasz tried to carefully balance some potentially
      conflicting priorities. He wanted to create a typeface that would seem
      quite “transparent” when used in body text but would display some original
      traits when used in larger sizes. He used classical proportions
      (particularly visible in the uppercase) to give the letterforms familiar
      harmony and elegance. At the same time, he created a sleek sans serif
      look, which makes evident the fact that Lato was designed in 2010 — even
      though it does not follow any current trend.
    </p>

    <p class="text-xs mb-4">
      The semi-rounded details of the letters give Lato a feeling of warmth,
      while the strong structure provides stability and seriousness. “Male and
      female, serious but friendly. With the feeling of the Summer,” says
      Łukasz. Learn more at www.latofonts.com
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
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

interface Car {
  id: string;
  brand: string;
  model: string;
}

export default defineComponent({
  name: "Car",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup: (props) => {
    const store = useStore();
    const isGalleryActive = ref(false);

    console.log(props.id);

    return {
      car: computed(() =>
        store.state.cars.find((car: Car) => car.id === props.id)
      ),
      isGalleryActive,
      activateGallery: () => {
        isGalleryActive.value = true;
      },
      deactivateGallry: () => {
        isGalleryActive.value = false;
      },
      dateFormatter: new Intl.DateTimeFormat(window.navigator.language),
      numberFormatter: new Intl.NumberFormat(window.navigator.language),
    };
  },
});
</script>
