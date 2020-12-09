<template>
  <div class="p-4" id="page">
    <h1 class="text-7xl mb-2">Heading</h1>
    <h1 class="text-6xl mb-2">Heading</h1>
    <h1 class="text-5xl mb-2">Heading</h1>
    <h1 class="text-4xl mb-2">Heading</h1>
    <h1 class="text-3xl mb-2">Heading</h1>
    <h1 class="text-2xl mb-2">Heading</h1>
    <h1 class="text-xl mb-2">Heading</h1>
    <h1 class="mb-4 flex items-center bg-yellow-100 relative">
      <span
        class="absolute top-0 -z-1 left-0 right-0 bg-green-100 bg-opacity-50"
        style="height: 5px"
      ></span>
      <span class="material-icons">check_box_outline_blank</span>
      Heading <span class="material-icons">disabled_by_default</span>
      <span
        class="absolute bottom-0 -z-1 left-0 right-0 bg-green-100 bg-opacity-50"
        style="height: 5px"
      ></span>
    </h1>

    <p class="mb-4">
      The use of typography as a principal design element in the latest trends,
      means Google Fonts is now a more valuable resource than ever. Its
      interface and download system is very intuitive and comfortable.
    </p>

    <div class="bg-gray-50 p-4 mb-2 flex justify-end">
      <button
        class="text-black text-opacity-60 px-4 py-2 rounded mr-4 font-medium"
        type="button"
        @click="hideSelector"
      >
        Cancel
      </button>
      <button
        class="bg-blue-700 text-white px-4 py-2 rounded text-opacity-90 font-medium"
        type="submit"
      >
        Save
      </button>
    </div>

    <select v-model="currentFont">
      <option selected disabled hidden value="">Select font</option>
      <option v-for="font in fonts" :value="font" :key="font">
        {{ font }}
      </option>
    </select>
    <button class="px-2 ml-2 border" type="button" @click="pickNext">
      Next font
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Fonts",

  setup: () => {
    const currentFont = ref("");
    const fonts: string[] = [
      "Roboto",
      "Andika New Basic",
      "Open Sans",
      "Padauk",
      "Lato",
      "Montserrat",
      "Roboto Condensed",
      "Oswald",
      "Poppins",
      "Raleway",
      "Noto Sans",
      "PT Sans",
      "Ubuntu",
      "Nunito",
      "Open Sans Condensed",
      "Work Sans",
      "Rubik",
      "Mukta",
      "Hind Siliguri",
      "Fira Sans",
      "Nunito Sans",
      "Titillium Web",
      "Quicksand",
      "Nanum Gothic",
      "Karla",
      "Yanone Kaffeesatz",
      "Heebo",
      "Barlow",
      "Oxygen",
      "PT Sans Narrow",
      "Arimo",
      "Dosis",
      "Cabin",
      "Barlow Condensed",
      "Libre Franklin",
      "Inter",
      "Teko",
      "Overpass",
      "Exo 2",
      "Cairo",
      "Kanit",
      "Questrial",
      "Asap",
      "Assistant",
      "Prompt",
      "DM Sans",
      "Archivo Narrow",
      "Play",
      "Catamaran",
      "Fira Sans Condensed",
      "Signika",
      "Exo",
      "Archivo",
      "Tajawal",
      "ABeeZee",
      "Alegreya Sans",
      "Barlow Semi Condensed",
      "Yantramanav",
      "Ubuntu Condensed",
      "Cantarell",
      "M PLUS Rounded 1c",
      "Mulish",
      "M PLUS 1p",
      "Cuprum",
      "Merriweather Sans",
      "Maven Pro",
    ].sort();

    watch(currentFont, () => {
      const link = document.querySelector("#font") as HTMLLinkElement;
      const page = document.querySelector("#page") as HTMLElement;

      if (link === null || page === null) {
        return;
      }

      link.href = `https://fonts.googleapis.com/css2?family=${currentFont.value.replaceAll(
        " ",
        "+"
      )}:wght@400;500&display=swap`;
      page.style.fontFamily = currentFont.value;
    });

    return {
      currentFont,
      fonts,
      pickNext: () => {
        const currentIndex = fonts.findIndex((i) => currentFont.value === i);
        const nextFont = fonts[currentIndex + 1] || fonts[0];
        currentFont.value = nextFont;
      },
    };
  },
});
</script>
