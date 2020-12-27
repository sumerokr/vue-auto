<template>
  <div class="p-4 pb-20" v-if="car">
    <!-- main slider -->
    <div class="relative z-10 -mx-4 -mt-4 mb-4">
      <ul
        class="slider flex overflow-x-scroll"
        style="scroll-snap-type: x mandatory"
      >
        <li
          v-for="(image, index) in car.images"
          :key="image['320']"
          class="flex-shrink-0 w-full"
          style="scroll-snap-align: start"
        >
          <img
            class="w-full"
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

      <div
        class="absolute bottom-4 right-4 rounded flex items-center py-1 px-2 bg-black bg-opacity-50"
      >
        <span
          class="material-icons mr-1.5 text-white text-opacity-60"
          style="font-size: 18px"
          >collections</span
        >
        <span class="text-white text-sm text-opacity-100">{{
          car.images.length
        }}</span>
      </div>
    </div>
    <!-- /main slider -->

    <!-- thumbs -->
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
          max-width: 80px;
        "
        @click="
          () => {
            goTo(index);
          }
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
    <!-- /thumbs -->

    <!-- gallery -->
    <div
      v-if="isGalleryActive"
      class="fixed z-50 inset-0 flex flex-col bg-black bg-opacity-90"
      @click.self="deactivateGallry"
    >
      <div class="p-4 flex items-center justify-end">
        <span
          class="material-icons text-white"
          @click="
            () => {
              isGalleryActive = false;
            }
          "
          >close</span
        >
      </div>
      <ul class="overflow-y-auto space-y-2 bg-white">
        <li
          v-for="(image, index) in car.images"
          :key="image['320']"
          class="shadow"
        >
          <img
            class="w-full"
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
    <!-- /gallery -->

    <h1 class="mb-2.5 text-xl flex items-center justify-between">
      <span class="text-black text-opacity-90 font-medium"
        >{{ car.brand }} {{ car.model }}</span
      >
      <IconButton class="-m-3 ml-3" @click.prevent="toogleIsBookmared">
        <span class="material-icons text-black text-opacity-60">{{
          isBookmarked ? "bookmark" : "bookmark_border"
        }}</span>
      </IconButton>
    </h1>

    <p class="flex items-center mb-6 text-3xl font-semibold">
      <span>{{ numberFormatter.format(car.price) }} €</span>
      <button
        class="ml-6 flex items-center bg-yellow-400 bg-opacity-10 text-sm uppercase text-black px-3 py-2 rounded text-opacity-90 font-medium"
        type="button"
      >
        <span
          class="material-icons text-black text-opacity-60 mr-2"
          style="font-size: 18px"
          >timeline</span
        >
        <span>Price history</span>
      </button>
    </p>

    <h3 class="text-xl mb-2">Details</h3>
    <table>
      <tbody>
        <tr
          v-for="[key, val] in [
            [
              'Month/Year',
              `${String(car.month + 1).padStart(2, '0')}/${car.year}`,
            ],
            ['Fuel', car.fuel],
            ['Mileage', `${numberFormatter.format(car.mileage)} km`],
            ['Gearbox', car.gearbox],
            ['Power', `${car.power} hp`],
            ['Drivetrain', car.drivetrain],
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

    <!-- description -->
    <h3 class="text-xl mb-2">Description</h3>
    <div class="mb-4 border-l-2 pl-4">
      <p class="mb-4 text-black text-opacity-90">
        Lato is a sans serif typeface family started in the summer of 2010 by
        Warsaw-based designer Łukasz Dziedzic (“Lato” means “Summer” in Polish).
        In December 2010 the Lato family was published under the Open Font
        License by his foundry tyPoland, with support from Google.
      </p>
      <p class="flex items-center">
        <span class="mr-2 material-icons opacity-60" style="font-size: 12px">{{
          car.ownerType
        }}</span
        ><span class="text-xs opacity-60">{{ car.ownerName }}</span>
      </p>
    </div>
    <!-- /description -->

    <br />

    <!-- options -->
    <h3 class="text-xl mb-2">Options</h3>
    <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">Comfort</h4>
    <ul class="mb-4 list-disc list-inside">
      <li
        class="text-black text-opacity-90"
        v-for="n in f.random.number({ min: 3, max: 10 })"
        :key="n"
      >
        {{ f.random.words() }}
      </li>
    </ul>

    <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
      Multimedia
    </h4>
    <ul class="mb-4 list-disc list-inside">
      <li
        class="text-black text-opacity-90"
        v-for="n in f.random.number({ min: 3, max: 10 })"
        :key="n"
      >
        {{ f.random.words() }}
      </li>
    </ul>

    <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">Safety</h4>
    <ul class="mb-4 list-disc list-inside">
      <li
        class="text-black text-opacity-90"
        v-for="n in f.random.number({ min: 3, max: 10 })"
        :key="n"
      >
        {{ f.random.words() }}
      </li>
    </ul>

    <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">Extra</h4>
    <ul class="mb-4 list-disc list-inside">
      <li
        class="text-black text-opacity-90"
        v-for="n in f.random.number({ min: 3, max: 10 })"
        :key="n"
      >
        {{ f.random.words() }}
      </li>
    </ul>
    <!-- options -->

    <br />

    <h3 class="text-lg mb-2">Contacts</h3>
    <p class="flex items-center mb-2">
      <span class="mr-4 material-icons opacity-60">{{ car.ownerType }}</span
      ><span class="text-black text-opacity-90">{{ car.ownerName }}</span>
    </p>
    <p class="flex items-center">
      <span class="mr-4 material-icons opacity-60">place</span>
      <span class="text-black text-opacity-90">{{ car.city }}</span>
    </p>
  </div>

  <!-- bottom bar -->
  <div
    class="shadow-8 fixed z-40 bottom-0 px-4 py-2.5 right-0 left-0 flex items-center justify-end bg-blue-700"
  >
    <button
      type="button"
      class="flex items-center text-sm uppercase text-white -my-2 p-3 rounded text-opacity-70 font-medium"
    >
      <span class="material-icons" style="">email</span>
    </button>

    <button
      type="button"
      class="flex items-center text-sm uppercase text-white -my-2 p-3 rounded text-opacity-70 font-medium"
    >
      <span class="material-icons" style="">message</span>
    </button>

    <button
      type="button"
      class="flex items-center text-sm uppercase text-white -my-2 p-3 rounded text-opacity-70 font-medium"
    >
      <span class="text-white text-opacity-70" style=""
        ><svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.892 13.745s.427.038.656-.247l.448-.563c.216-.28.738-.458 1.249-.174.676.382 1.55.982 2.149 1.541.33.278.407.688.182 1.121l-.002.009c-.232.408-.541.791-.932 1.148l-.009.006c-.44.367-.946.58-1.487.404l-.01-.014c-.972-.275-3.304-1.464-4.79-2.649-2.431-1.918-4.159-5.082-4.637-6.778l-.015-.01c-.176-.543.039-1.049.404-1.488l.007-.008c.357-.391.739-.701 1.148-.932l.009-.002c.432-.225.842-.149 1.121.182.367.379 1.056 1.291 1.54 2.149.284.51.106 1.033-.173 1.248l-.564.448c-.284.23-.247.657-.247.657s.834 3.156 3.953 3.952zm4.907-2.616c-.167 0-.303-.135-.304-.302-.014-1.83-.564-3.288-1.634-4.332-1.072-1.045-2.427-1.581-4.027-1.592-.168-.001-.303-.138-.301-.306.001-.167.136-.301.303-.301h.002c1.762.012 3.258.606 4.447 1.764 1.19 1.162 1.802 2.765 1.817 4.763.001.167-.133.304-.301.306h-.002zm-1.595-.624h-.007c-.168-.004-.301-.143-.297-.31.024-1.038-.273-1.878-.906-2.569-.63-.689-1.495-1.065-2.645-1.149-.167-.013-.293-.158-.281-.325.013-.167.158-.293.325-.281 1.294.095 2.32.548 3.049 1.345.733.8 1.092 1.807 1.065 2.992-.004.165-.139.297-.303.297zm-1.558-.522c-.161 0-.295-.126-.303-.289-.051-1.03-.537-1.534-1.527-1.588-.168-.009-.296-.152-.287-.319.009-.168.151-.296.319-.287 1.308.07 2.034.819 2.101 2.164.009.167-.12.31-.288.318l-.015.001zm6.817 3.469c-.605 4.877-4.172 5.185-4.83 5.396-.28.09-2.882.737-6.152.524 0 0-2.438 2.94-3.199 3.705-.119.119-.258.167-.352.145-.131-.032-.167-.188-.165-.414l.02-4.016v-.001c-4.762-1.323-4.485-6.295-4.431-8.898.054-2.603.543-4.736 1.996-6.17 2.61-2.364 7.987-2.011 7.987-2.011 4.541.02 6.717 1.387 7.222 1.845 1.675 1.434 2.528 4.867 1.904 9.895zm-.652-11.113c-.597-.548-3.007-2.298-8.375-2.322 0 0-6.33-.382-9.416 2.45-1.718 1.718-2.322 4.231-2.386 7.348-.063 3.118-.146 8.958 5.484 10.542l.006.002-.004 2.416s-.035.979.609 1.179c.779.241 1.236-.502 1.981-1.304.408-.44.971-1.086 1.397-1.58 3.851.322 6.812-.417 7.149-.526.777-.253 5.177-.816 5.893-6.657.738-6.022-.358-9.83-2.338-11.548z"
          /></svg
      ></span>
    </button>

    <button
      type="button"
      class="mr-4 flex items-center text-sm uppercase text-white -my-1.5 p-3 rounded text-opacity-70 font-medium"
    >
      <span class="text-white text-opacity-70" style=""
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
          /></svg
      ></span>
    </button>

    <button
      class="shadow-12 p-4 bg-yellow-400 rounded-full -my-4 transform -translate-y-1/2"
      type="button"
    >
      <span
        class="material-icons text-black text-opacity-60 align-top"
        @click="pickNext"
        >call</span
      >
    </button>
  </div>
  <!-- /bottom bar -->
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import { useStore } from "vuex";
import f from "faker";

interface Car {
  id: string;
  brand: string;
  model: string;
}

export default defineComponent({
  name: "Car",

  components: {
    IconButton,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup: (props) => {
    const store = useStore();
    const isGalleryActive = ref(false);

    const isBookmarked = ref(false);
    const toogleIsBookmared = () => {
      isBookmarked.value = !isBookmarked.value;
    };

    return {
      f,
      isBookmarked,
      toogleIsBookmared,
      car: computed(
        () =>
          store.state.cars.find((car: Car) => car.id === props.id) ||
          store.state.cars[0]
      ),
      isGalleryActive,
      activateGallery: () => {
        isGalleryActive.value = true;
      },
      deactivateGallry: () => {
        isGalleryActive.value = false;
      },
      goTo: (index: number) => {
        const slider = document.querySelector(".slider");
        if (!slider) {
          return;
        }
        slider.children[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      },
      dateFormatter: new Intl.DateTimeFormat(window.navigator.language),
      numberFormatter: new Intl.NumberFormat(window.navigator.language),
    };
  },
});
</script>
