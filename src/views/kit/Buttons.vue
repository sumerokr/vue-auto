<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">Buttons</h1>

    <h2 class="text-lg mb-2">Default</h2>
    <div class="space-y-2">
      <AppButton>Default</AppButton>
      <AppButton disabled>Default</AppButton>
      <AppButton before="person">Default</AppButton>
      <AppButton after="person">Default</AppButton>
      <AppButton disabled after="person">Default</AppButton>
    </div>

    <br />
    <h2 class="text-lg mb-2">Primary</h2>
    <div class="space-y-2">
      <AppButton appearance="primary">Default</AppButton>
      <AppButton appearance="primary" disabled>Default</AppButton>
      <AppButton appearance="primary" before="person">Default</AppButton>
      <AppButton appearance="primary" after="person">Default</AppButton>
      <AppButton appearance="primary" disabled after="person"
        >Default</AppButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/AppButton/AppButton.vue";

export default defineComponent({
  name: "KitButtons",

  components: { AppButton },

  props: {
    isBlock: {
      type: Boolean,
      default: false,
    },
    appearance: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "36",
    },
    before: {
      type: String,
      default: "",
    },
    after: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
  },
});
</script>

<style scoped></style>
