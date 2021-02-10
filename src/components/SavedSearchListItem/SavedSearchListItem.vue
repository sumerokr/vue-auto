<template>
  <div class="card rounded shadow-1">
    <h2 class="mm-make text-xl mb-2">Hynday</h2>
    <div class="mm">
      <div class="mm-image">
        <span class="block w-12 h-12 bg-blue-100 rounded-xl"></span>
      </div>
      <div class="mm-make text-xl">Hynday</div>
      <div class="mm-model text-sm">i20, i30</div>
    </div>

    <div class="mb-4 text-sm text-black text-opacity-60">
      <span>2018 – 2019</span>
      <span class="mx-2">•</span>
      <span> 20 000 km</span>
      <span class="mx-2">•</span>
      <span>Automat</span>
    </div>

    <div>
      <AppButton before="edit">Edit</AppButton>
    </div>

    <hr class="my-4" />

    <div class="flex justify-between items-center">
      <span>Notify me about updates</span>
      <div style="margin: -12px 0">
        <AppToggler v-model="enabled" :id="'foo' + Math.random()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import AppToggler from "@/components/AppToggler/AppToggler.vue";

export default defineComponent({
  name: "SavedSearchItem",

  components: {
    AppButton,
    AppToggler,
  },

  setup: () => {
    const enabled = ref(false);

    return {
      enabled,
    };
  },
});
</script>

<style scoped>
.card {
  padding: 16px;
}

.mm {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 0 1rem;
  margin-bottom: 12px;
}

.mm-image {
  grid-row: 1 / 3;
}

.mm-make {
  grid-column: 2;
}

.mm-model {
  grid-column: 2;
}
</style>
