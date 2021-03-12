<template>
  <h2 class="text-2xl mb-6">Photos</h2>
  <div class="grid gap-4">
    <div class="col-span-2 border p-2">
      <div class="relative bg-gray-100" style="aspect-ratio: 16/9">
        <img
          class="absolute top-0 left-0 w-full h-full object-contain"
          v-if="source"
          :src="source"
          alt=""
          ref="image"
        />
        <input
          class="absolute inset-0 w-full opacity-10"
          type="file"
          ref="uploader"
          multiple
          @change="handleMain"
        />
      </div>
    </div>
    <div class="border p-2" v-for="n in 10" :key="n">
      <div class="bg-gray-100" style="aspect-ratio: 16/9"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AddDetails",

  components: {},

  setup: () => {
    const uploader = ref();
    const source = ref();

    const handleMain = () => {
      if (uploader.value === null) {
        return;
      }
      const file = uploader.value.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        source.value = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        source.value = null;
      }
    };

    return {
      uploader,
      source,
      handleMain,
    };
  },
});
</script>

<style scoped></style>
