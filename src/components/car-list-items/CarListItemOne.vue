<template>
  <div class="card shadow-1 rounded overflow-hidden" ref="root">
    <RouterLink :to="{ name: 'Car', params: { id: car.id } }">
      <p>
        <img
          class="w-full"
          :src="car.images[0]['320']"
          :srcset="`
            ${car.images[0]['320']}   320w,
            ${car.images[0]['640']}   640w,
            ${car.images[0]['960']}   960w,
            ${car.images[0]['1280']} 1280w,
            ${car.images[0]['1600']} 1600w,
            ${car.images[0]['1920']} 1920w
          `"
          sizes="
            (min-width: 1952px) 1920px,
            (min-width: 1312px) 1600px,
            (min-width: 992px)  1280px,
            (min-width: 672px)  960px,
            (min-width: 352px)  640px,
            320px
          "
          width="320"
          height="240"
          alt=""
        />
      </p>
      <div class="px-4 py-3">
        <h2 class="mb-0.5 flex items-center justify-between font-medium">
          <span class="text-black text-opacity-90"
            >{{ car.brand }} {{ car.model }}</span
          >
          <button
            class="-m-2.5 ml-4 p-2.5 flex items-center hover:bg-gray-100 active:bg-gray-200 focus:outline-none rounded-full"
            type="button"
            @click.prevent="toogleIsBookmared"
          >
            <span class="material-icons opacity-60">{{
              isBookmarked ? "bookmark" : "bookmark_border"
            }}</span>
          </button>
        </h2>
        <p class="mb-2 text-2xl font-semibold">
          {{ numberFormatter.format(car.price) }} €
        </p>

        <ul class="params mb-4 text-sm opacity-60">
          <li>{{ String(car.month).padStart(2, "0") }}/{{ car.year }}</li>
          <li>{{ car.fuel }}</li>
          <li>{{ numberFormatter.format(car.mileage) }} km</li>
          <li>{{ car.gearbox }}</li>
          <li>{{ car.power }} hp</li>
          <li>{{ car.drivetrain }}</li>
        </ul>

        <ul class="flex flex-wrap mb-4 gap-1" v-if="Math.random() < 0.4">
          <li
            class="px-2 py-0.5 bg-red-100 text-black text-sm text-opacity-60 rounded"
          >
            First owner
          </li>
          <li
            class="px-2 py-0.5 bg-blue-100 text-black text-sm text-opacity-60 rounded"
            v-if="Math.random() < 0.3"
          >
            Second owner
          </li>
          <li
            class="px-2 py-0.5 bg-green-100 text-black text-sm text-opacity-60 rounded"
            v-if="Math.random() < 0.3"
          >
            Zero crashes
          </li>
        </ul>

        <div class="meta">
          <p class="flex items-center">
            <span
              class="mr-2 material-icons opacity-60"
              style="font-size: 16px"
              >{{ car.ownerType }}</span
            ><span class="text-xs opacity-60">{{ car.ownerName }}</span>
          </p>
          <p class="flex items-center">
            <span class="mr-2 material-icons opacity-60" style="font-size: 16px"
              >place</span
            >
            <span class="text-xs opacity-60">{{ car.city }}</span>
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import f from "faker";

export default defineComponent({
  name: "CarListItemOne",

  props: {
    car: {
      type: Object,
      required: true,
    },
  },

  setup: () => {
    const root = ref(null);
    // @ts-expect-error
    const ro = new window.ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        const bps = [320, 420];
        const relevantBps = bps.filter((bp) => bp <= cr.width);
        entry.target.dataset.mq = relevantBps.join(",");
      }
    });
    onMounted(() => {
      ro.observe(root.value);
    });

    const isBookmarked = ref(false);
    const toogleIsBookmared = () => {
      isBookmarked.value = !isBookmarked.value;
    };

    return {
      f,
      root,
      isBookmarked,
      toogleIsBookmared,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>

<style scoped>
.params {
  display: grid;
  gap: 2px 8px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card[data-mq*="320"] .params {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.meta {
  display: grid;
  gap: 2px 8px;
  justify-content: space-between;
}

.card[data-mq*="320"] .meta {
  grid-template-columns: repeat(2, minmax(0, auto));
}
</style>
