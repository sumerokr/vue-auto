<template>
  <div class="cars p-4">
    <h1 class="text-3xl mb-8">Saved search</h1>

    <ul>
      <li>
        <div class="card rounded shadow-1">
          <div class="mm">
            <div class="mm-image">
              <span class="block w-12 h-12 bg-blue-100 rounded-xl"></span>
            </div>
            <div class="mm-make text-xl">Hynday</div>
            <div class="mm-model text-sm">i20, i30</div>
          </div>

          <div class="mb-4">
            <span>2018 – 2019</span>, <span> 20 000 km</span>,
            <span>Automat</span>
          </div>

          <div>
            <AppButton before="edit">Edit</AppButton>
          </div>

          <hr class="my-4" />

          <div class="flex justify-between items-center">
            <span>Notify me about updates</span>
            <span
              class="material-icons -my-1 text-blue-700"
              style="font-size: 32px"
              >toggle_on</span
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/AppButton/AppButton.vue";

export default defineComponent({
  name: "SavedSearch",

  components: {
    AppButton,
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
