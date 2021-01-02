<template>
  <div class="sort-options shadow-8">
    <h2 class="title">Sort options</h2>

    <ul>
      <li class="li">
        <span class="radio material-icons">radio_button_unchecked</span>
        <span><span class="accent">Price</span> lowest to highest</span>
      </li>
      <li class="li">
        <span class="radio material-icons">radio_button_unchecked</span>
        <span><span class="accent">Price</span> highest to lowest</span>
      </li>
      <li class="li">
        <span class="radio material-icons">radio_button_unchecked</span>
        <span><span class="accent">Published</span> newest to oldest</span>
      </li>
      <li class="li">
        <span class="radio material-icons">radio_button_unchecked</span>
        <span><span class="accent">Published</span> oldest to newest</span>
      </li>
    </ul>

    <div class="actions">
      <AppButton @click="$emit('click-cancel')">Cancel</AppButton>
      <AppButton appearance="primary" @click="$emit('click-sort')"
        >Sort</AppButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/AppButton/AppButton.vue";

export default defineComponent({
  name: "SortOptions",

  components: {
    AppButton,
  },
});
</script>

<style scoped>
.sort-options {
  position: fixed;
  z-index: 50;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
}

.title {
  font-size: 24px;
  padding: 16px;
  color: var(--color-text-primary);
}

.li {
  display: flex;
  padding: 12px 16px;
  color: var(--color-text-primary);
}

.radio {
  margin-right: 32px;
  color: var(--color-text-quite);
}

.accent {
  font-weight: 600;
}

.actions {
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  padding: 16px;
}
</style>
