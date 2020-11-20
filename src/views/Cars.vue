<template>
  <div class="p-4">
    <h1>Cars</h1>

    <ul>
      <li>
        <h2>Audi Q3, 2012</h2>
        <p>11 900</p>
        <ul
          class="flex -mx-4 overflow-x-scroll space-x-2"
          style="scroll-snap-type: x mandatory; scroll-padding-left: 1rem"
        >
          <li class="flex-shrink-0 w-2">&nbsp;</li>
          <li
            class="flex-shrink-0"
            style="scroll-snap-align: start; width: calc(100% - 2rem)"
          >
            <img
              class="max-w-full"
              src="https://fakeimg.pl/320x240/"
              srcset="
                https://fakeimg.pl/320x240/    320w,
                https://fakeimg.pl/640x480/    640w,
                https://fakeimg.pl/960x720/    960w,
                https://fakeimg.pl/1280x960/  1280w,
                https://fakeimg.pl/1600x1180/ 1600w
              "
            />
          </li>
          <li
            class="flex-shrink-0"
            style="scroll-snap-align: start; width: calc(100% - 2rem)"
          >
            <img
              class="max-w-full"
              src="https://fakeimg.pl/320x240/"
              srcset="
                https://fakeimg.pl/320x240/    320w,
                https://fakeimg.pl/640x480/    640w,
                https://fakeimg.pl/960x720/    960w,
                https://fakeimg.pl/1280x960/  1280w,
                https://fakeimg.pl/1600x1180/ 1600w
              "
            />
          </li>
          <li
            class="flex-shrink-0"
            style="scroll-snap-align: start; width: calc(100% - 2rem)"
          >
            <img
              class="max-w-full"
              src="https://fakeimg.pl/320x240/"
              srcset="
                https://fakeimg.pl/320x240/    320w,
                https://fakeimg.pl/640x480/    640w,
                https://fakeimg.pl/960x720/    960w,
                https://fakeimg.pl/1280x960/  1280w,
                https://fakeimg.pl/1600x1180/ 1600w
              "
            />
          </li>
          <li class="flex-shrink-0 w-2">&nbsp;</li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cars",
});
</script>
