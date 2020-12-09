<template>
  <div class="p-4">
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
      "ABeeZee",
      "Alegreya Sans",
      "Andika New Basic",
      "Archivo",
      "Archivo Narrow",
      "Arimo",
      "Asap", // !
      "Asap Condensed", // !
      "Assistant",
      "Barlow",
      "Barlow Condensed",
      "Barlow Semi Condensed",
      "Cabin",
      "Cairo",
      "Cantarell", // !
      "Catamaran",
      "Cuprum",
      "DM Sans",
      "Dosis",
      "Exo",
      "Exo 2",
      "Fira Sans",
      "Fira Sans Condensed",
      "Heebo",
      "Hind Siliguri",
      "Inter",
      "Kanit", // !
      "Karla",
      "Lato", // !
      "Libre Franklin",
      "M PLUS 1p",
      "M PLUS Rounded 1c",
      "Maven Pro", // !
      "Merriweather Sans",
      "Montserrat",
      "Mukta",
      "Mulish", // !
      "Nanum Gothic",
      "Noto Sans", // !
      "Nunito",
      "Nunito Sans",
      "Open Sans", // !
      "Open Sans Condensed",
      "Oswald",
      "Overpass",
      "Oxygen", // !
      "PT Sans", // !
      "PT Sans Narrow",
      "Padauk",
      "Play", // !
      "Poppins", // ?
      "Prompt",
      "Questrial",
      "Quicksand",
      "Raleway",
      "Roboto",
      "Roboto Condensed",
      "Rubik",
      "Signika",
      "Tajawal",
      "Teko",
      "Titillium Web", // !
      "Ubuntu", // !
      "Ubuntu Condensed", // !
      "Work Sans", // !
      "Yanone Kaffeesatz",
      "Yantramanav",
    ];

    watch(currentFont, () => {
      const link = document.querySelector("#font") as HTMLLinkElement;
      const body = document.querySelector("body") as HTMLElement;

      if (link === null || body === null) {
        return;
      }

      link.href = `https://fonts.googleapis.com/css2?family=${currentFont.value.replaceAll(
        " ",
        "+"
      )}:wght@400;500;600;700&display=swap`;
      body.style.fontFamily = `"${currentFont.value}", sans-serif`;
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
