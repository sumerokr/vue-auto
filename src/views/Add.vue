<template>
  <div>
    <h1 class="text-3xl p-4">Add a car</h1>

    <form class="bg-white p-4" @submit.prevent="onSubmit">
      <AddDetails v-if="step === 1" />
      <AddOptions v-else-if="step === 2" />
      <AddPhotos v-else-if="step === 3" />

      <div class="grid grid-cols-2 mt-8 gap-4">
        <AppButton after="arrow_back" size="48" is-block @click="onBack"
          >Back</AppButton
        >
        <AppButton
          after="arrow_forward"
          appearance="primary"
          size="48"
          type="submit"
          is-block
          >Next</AppButton
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AddDetails from "@/components/add/AddDetails.vue";
import AddOptions from "@/components/add/AddOptions.vue";
import AddPhotos from "@/components/add/AddPhotos.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Add",

  components: {
    AddDetails,
    AddOptions,
    AddPhotos,
    AppButton,
  },

  setup: () => {
    const router = useRouter();

    const step = ref(1);

    const onBack = () => {
      if (step.value > 1) {
        step.value -= 1;
      }
    };

    const onSubmit = () => {
      if (step.value < 3) {
        step.value += 1;
      } else {
        router.push({
          name: "AddSuccess",
        });
      }
    };

    return {
      step,
      onBack,
      onSubmit,
    };
  },
});
</script>

<style scoped></style>
