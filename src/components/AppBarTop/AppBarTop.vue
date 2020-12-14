<template>
  <div
    class="app-bar-top fixed z-50 top-0 p-4 right-0 left-0 flex items-center bg-blue-700"
  >
    <span
      class="material-icons align-top mr-8 text-white"
      @click="$emit('click')"
      >menu</span
    >
    <span class="text-white text-2xl font-medium italic">vozila</span>
  </div>
</template>

<script>
export default {
  name: "AppBarTop",

  emits: {
    click: null,
  },
};
</script>

<style>
.app-bar-top {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
