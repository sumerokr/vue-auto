<template>
  <div class="p-4">
    <p class="-mx-4 mb-4">
      <img
        class="w-full"
        :src="`https://fakeimg.pl/320x180/ffca28/000000/`"
        :srcset="`
          https://fakeimg.pl/320x180/ffca28/000000/    320w,
          https://fakeimg.pl/640x360/ffca28/000000/    640w,
          https://fakeimg.pl/960x540/ffca28/000000/    960w,
          https://fakeimg.pl/1280x720/ffca28/000000/  1280w,
          https://fakeimg.pl/1600x900/ffca28/000000/ 1600w
        `"
        width="320"
        height="180"
        alt=""
      />
    </p>
    <h1 class="text-3xl mb-8">Renault alliance</h1>
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

    <h2 class="text-xl mb-2">Service</h2>
    <ul>
      <li>Sell new car</li>
      <li>Sell used car</li>
      <li>Repair</li>
      <li>Car parts</li>
    </ul>

    <br />

    <h2 class="text-xl mb-2">Contacts</h2>
    <ul>
      <li>Phone: +123456789</li>
      <li>Address: City, Street house nr.</li>
    </ul>

    <br />

    <h2 class="text-xl mb-2">Working time</h2>
    <ul>
      <li>Monday-Frriday: 08:00-16:00</li>
      <li>Saturday: 08:00-14:00</li>
      <li>Sunday: Closed</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Company",
});
</script>
