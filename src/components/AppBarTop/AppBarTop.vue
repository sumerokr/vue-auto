<template>
  <div
    class="app-bar-top sticky z-40 top-0 px-4 py-3 right-0 left-0 flex bg-white items-center"
  >
    <IconButton class="-my-2 -mx-3 mr-5" icon="menu" @click="$emit('click')" />
    <RouterLink
      :to="{ name: 'Home' }"
      class="logo text-white text-xl text-white bg-red-500 rounded font-medium px-2"
      >{{ currentFont || "Logo" }}</RouterLink
    >
    <IconButton icon="notifications" class="-my-2 ml-auto" />
    <IconButton icon="person" class="-my-2" @click="pickNext" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";

export default defineComponent({
  name: "AppBarTop",

  emits: {
    click: null,
  },

  components: {
    IconButton,
  },

  setup: () => {
    const [font] = document.body.style.fontFamily.split(", ");
    const currentFont = ref(font || "");
    const fonts: string[] = [
      "Arimo",
      "Asap",
      "Asap Condensed",
      "Assistant",
      "Average Sans",
      "Blinker",
      "Cabin",
      "Cabin Condensed",
      "Chivo",
      "Commissioner",
      "DM Sans",
      "Encode Sans",
      "Encode Sans Condensed",
      "Encode Sans Semi Condensed",
      "Encode Sans Semi Expanded",
      "Exo 2",
      "Fira Sans",
      "Fira Sans Condensed",
      "Fira Sans Extra Condensed",
      "IBM Plex Sans",
      "IBM Plex Sans Condensed",
      "Inter",
      "Jost",
      "Kulim Park",
      "Lato",
      "Libre Franklin",
      "Manrope",
      "Maven Pro",
      "Montserrat",
      "Mulish",
      "Noto Sans",
      "Open Sans",
      "Orienta",
      "PT Sans",
      "PT Sans Caption",
      "PT Sans Narrow",
      "Poppins",
      "Prompt",
      "Public Sans",
      "Quicksand",
      "Rambla",
      "Recursive",
      "Red Hat Display",
      "Red Hat Text",
      "Roboto",
      "Roboto Condensed",
      "Rubik",
      "Saira",
      "Saira Condensed",
      "Saira Semi Condensed",
      "Signika",
      "Signika Negative",
      "Source Sans Pro",
      "Titillium Web",
      "Ubuntu",
      "Ubuntu Condensed",
      "Work Sans",
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
      document.documentElement.style.setProperty(
        "--font-family-default",
        `"${currentFont.value}", sans-serif`
      );
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

<style scoped>
.app-bar-top {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.12);
}

.logo {
  font-family: var(--font-family-condensed);
}
</style>
