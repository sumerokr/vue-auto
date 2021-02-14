<template>
  <div class="car-card-compact shadow-1 rounded">
    <RouterLink class="link" :to="{ name: 'Car', params: { id: car.id } }">
      <p class="image-wrapper">
        <img
          class="w-full align-top"
          :src="car.images[0]"
          width="160"
          height="120"
          alt=""
        />
        <IconButton
          :icon="isBookmarked ? 'bookmark' : 'bookmark_border'"
          class="bookmark"
          theme="light"
          type="button"
          @click.prevent="toogleIsBookmared"
        />
      </p>

      <div class="content">
        <p class="price">{{ numberFormatter.format(car.price) }} €</p>

        <h2 class="title">{{ car.make }} {{ car.model }}</h2>

        <ul class="params">
          <li>{{ dateFormatter.format(new Date(car.year, car.month)) }}</li>
          <li>{{ car.fuel }}</li>
          <li>{{ numberFormatter.format(car.mileage) }} km</li>
          <li>{{ car.gearbox }}</li>
          <li>{{ car.power }} hp</li>
          <li>{{ car.drivetrain }}</li>
        </ul>
      </div>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";

export default defineComponent({
  name: "CarCardCompact",

  components: {
    IconButton,
  },

  props: {
    car: {
      type: Object,
      required: true,
    },
  },

  setup: () => {
    const isBookmarked = ref(false);
    const toogleIsBookmared = () => {
      isBookmarked.value = !isBookmarked.value;
    };

    return {
      isBookmarked,
      toogleIsBookmared,
      dateFormatter: new Intl.DateTimeFormat(window.navigator.language, {
        month: "2-digit",
        year: "numeric",
      }),
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>

<style scoped>
.car-card-compact {
  overflow: hidden;
  width: 160px;
}

.link {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.image-wrapper {
  position: relative;
  z-index: 1;
}

.icon-button {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
}

.content {
  padding: 8px;
}

.price {
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
}

.title {
  font-size: 14px;
  margin-bottom: 2px;
}

.params {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 8px;
}

.params > li {
  font-size: 12px;
  color: var(--color-text-secondary);
}
</style>
