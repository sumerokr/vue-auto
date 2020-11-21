<template>
  <div class="p-4">
    <h1 class="text-3xl mb-8">Companies</h1>

    <ul>
      <li>
        <router-link :to="{ name: 'Company', params: { id: 1 } }"
          >Renault Alliance</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Companies",
});
</script>
