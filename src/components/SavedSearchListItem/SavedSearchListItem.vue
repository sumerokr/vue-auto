<template>
  <div class="card bg-white shadow-0">
    <h2 class="text-black text-opacity-75 mb-2">My saved search</h2>
    <div class="mm">
      <div class="mm-image">
        <span class="block w-12 h-12 bg-blue-100 rounded-xl"></span>
      </div>
      <div class="mm-make text-xl">Mercedes-Benz</div>
      <div class="mm-model text-sm">i20, i30</div>
    </div>

    <div class="mb-4 text-sm text-black text-opacity-60">
      <span>2018 – 2019</span>
      <span class="mx-2">•</span>
      <span> 20 000 km</span>
      <span class="mx-2">•</span>
      <span>Automat</span>
    </div>

    <div class="flex gap-2">
      <AppButton before="search" @click="search">Search</AppButton>
      <AppButton before="edit" @click="edit">Edit</AppButton>
      <IconButton class="-my-1.5 ml-auto" icon="delete" @click="remove"
        >Edit</IconButton
      >
    </div>

    <hr class="my-4" />

    <div class="flex justify-between items-center">
      <span class="text-black text-opacity-90">Notify me about updates</span>
      <div style="margin: -12px 0">
        <AppToggler v-model="enabled" :id="'foo' + Math.random()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import AppToggler from "@/components/AppToggler/AppToggler.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SavedSearchItem",

  components: {
    AppButton,
    IconButton,
    AppToggler,
  },

  props: {
    savedSearch: {
      type: Object,
    },
  },

  setup: () => {
    const router = useRouter();

    const enabled = ref(false);

    const search = () => {
      router.push({
        name: "Cars",
      });
    };

    const edit = () => {
      router.push({
        name: "SavedSearch2",
        params: {
          id: "uid",
        },
      });
    };

    const remove = () => {
      console.log("remove");
    };

    return {
      enabled,
      search,
      edit,
      remove,
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
