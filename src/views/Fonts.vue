<template>
  <div class="p-4">
    <!-- <h1 class="text-7xl mb-2">Heading</h1> -->
    <!-- <h1 class="text-6xl mb-2">Heading</h1> -->
    <!-- <h1 class="text-5xl mb-2">Heading 1</h1> -->
    <!-- <h2 class="text-4xl mb-2">Heading 2</h2> -->
    <h3 class="text-3xl mb-2">Heading 3</h3>
    <!-- <h4 class="text-2xl mb-2">Heading 4</h4> -->
    <!-- <h5 class="text-xl mb-2">Heading 5</h5> -->
    <h6 class="mb-4 flex items-center bg-yellow-100 relative">
      <span
        class="absolute top-0 -z-10 left-0 right-0 bg-green-300 bg-opacity-50"
        style="height: 5px"
      ></span>
      <span
        class="absolute top-0 -z-10 left-0 right-0 bg-red-200 bg-opacity-50"
        style="height: 1px; transform: translateY(5px)"
      ></span>
      <span class="material-icons">check_box_outline_blank</span>
      Heading 6 <span class="material-icons">disabled_by_default</span>
      <span
        class="absolute bottom-0 -z-10 left-0 right-0 bg-red-200 bg-opacity-50"
        style="height: 1px; transform: translateY(-5px)"
      ></span>
      <span
        class="absolute bottom-0 -z-10 left-0 right-0 bg-green-300 bg-opacity-50"
        style="height: 5px"
      ></span>
    </h6>

    <p class="text-lg mb-4">
      Lato is a sans serif typeface family started in the summer of 2010 by
      Warsaw-based designer Łukasz Dziedzic (“Lato” means “Summer” in Polish).
      In December 2010 the Lato family was published under the Open Font
      License.
    </p>

    <p class="text-base mb-4">
      In the last ten or so years, during which Łukasz has been designing type,
      most of his projects were rooted in a particular design task that he
      needed to solve. With Lato, it was no different. Originally, the family
      was conceived as a set of corporate fonts.
    </p>

    <p class="text-sm mb-4">
      When working on Lato, Łukasz tried to carefully balance some potentially
      conflicting priorities. He wanted to create a typeface that would seem
      quite “transparent” when used in body text but would display some original
      traits when used in larger sizes. He used classical proportions
      (particularly visible in the uppercase) to give the letterforms familiar
      harmony.
    </p>

    <p class="text-xs mb-4">
      The semi-rounded details of the letters give Lato a feeling of warmth,
      while the strong structure provides stability and seriousness. “Male and
      female, serious but friendly. With the feeling of the Summer,” says
      Łukasz. Learn more at www.latofonts.com
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Fonts",
});
</script>
