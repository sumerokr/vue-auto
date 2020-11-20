<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Cars</h1>

    <ul class="space-y-4">
      <li
        class="border-b-4 border-solid border-gray-200 pb-4"
        v-for="n in 10"
        :key="n"
      >
        <h2>Audi Q3, 2012</h2>
        <p class="text-xl mb-2">11 900 €</p>
        <ul
          class="flex -mx-4 overflow-x-scroll space-x-2 mb-2"
          style="scroll-snap-type: x mandatory; scroll-padding-left: 1rem"
        >
          <li class="flex-shrink-0 w-2">&nbsp;</li>
          <li
            v-for="item in ['633', '363', '336']"
            :key="item"
            class="flex-shrink-0"
            style="scroll-snap-align: start; width: calc(100% - 2rem)"
          >
            <img
              class="max-w-full"
              :src="`https://fakeimg.pl/320x240/${item}`"
              :srcset="`
                https://fakeimg.pl/320x240/${item}    320w,
                https://fakeimg.pl/640x480/${item}    640w,
                https://fakeimg.pl/960x720/${item}    960w,
                https://fakeimg.pl/1280x960/${item}  1280w,
                https://fakeimg.pl/1600x1180/${item} 1600w
              `"
            />
          </li>
          <li class="flex-shrink-0 w-2">&nbsp;</li>
        </ul>
        <ul style="columns: 2">
          <li
            class="text-sm"
            v-for="item in [
              '25 000 km',
              '1.6 l, 200 hp',
              'Robot',
              'Black',
              'FWD',
              'Sedan',
            ]"
            :key="item"
          >
            {{ item }}
          </li>
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
