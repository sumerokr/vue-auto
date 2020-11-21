<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Car</h1>
    <h2>Audi Q3, 2012</h2>
    <p class="text-xl mb-2">11 900 €</p>
    <ul
      class="flex overflow-x-scroll -mx-4 mb-4 space-x-1"
      style="scroll-snap-type: x mandatory; scroll-padding-left: 1rem"
    >
      <li class="flex-shrink-0 w-3">&nbsp;</li>
      <li
        v-for="(item, index) in [
          '663333',
          '336633',
          '333366',
          '884444',
          '448844',
          '444488',
        ]"
        :key="item"
        class="flex-shrink-0"
        style="
          scroll-snap-align: start;
          width: calc(100% - 2rem);
          max-width: 300px;
        "
      >
        <img
          class="max-w-full"
          :src="`https://fakeimg.pl/320x240/${item}/`"
          :srcset="`
            https://fakeimg.pl/320x240/${item}/    320w,
            https://fakeimg.pl/640x480/${item}/    640w,
            https://fakeimg.pl/960x720/${item}/    960w,
            https://fakeimg.pl/1280x960/${item}/  1280w,
            https://fakeimg.pl/1600x1200/${item}/ 1600w
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
        <li class="flex-shrink-0 w-3">&nbsp;</li>
        <li
          v-for="(item, index) in [
            '663333',
            '336633',
            '333366',
            '884444',
            '448844',
            '444488',
          ]"
          :key="item"
          class="flex-shrink-0"
          style="scroll-snap-align: start"
        >
          <img
            class="w-full"
            :src="`https://fakeimg.pl/320x240/${item}/`"
            :srcset="`
              https://fakeimg.pl/320x240/${item}/    320w,
              https://fakeimg.pl/640x480/${item}/    640w,
              https://fakeimg.pl/960x720/${item}/    960w,
              https://fakeimg.pl/1280x960/${item}/  1280w,
              https://fakeimg.pl/1600x1200/${item}/ 1600w
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
    </div>

    <h3 class="text-xl mb-2">Options</h3>
    <table>
      <tbody>
        <tr v-for="n in 10" :key="n">
          <td class="pr-8 text-black text-opacity-60">Property</td>
          <td class="text-black text-opacity-90">Value</td>
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
        class="bg-blue-500 text-white px-4 py-3 rounded text-opacity-90"
        type="button"
      >
        Call
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Car",
  setup() {
    const isGalleryActive = ref(false);

    return {
      isGalleryActive,
      activateGallery: () => {
        isGalleryActive.value = true;
      },
      deactivateGallry: () => {
        isGalleryActive.value = false;
      },
    };
  },
});
</script>
