<template>
  <li class="card shadow-1 rounded overflow-hidden" ref="root">
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
      <div class="p-2">
        <h2 class="mb-1 text-xs flex items-center justify-between font-medium">
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

        <p class="mb-2 text-xl font-semibold">
          {{ numberFormatter.format(car.price) }} €
        </p>

        <p class="mb-2 text-xs opacity-60">
          {{ car.year }} / {{ numberFormatter.format(car.mileage) }} km /
          {{ car.gearbox }}
        </p>

        <ul v-if="car.tags.length" class="flex flex-wrap mb-2 gap-1">
          <li
            v-for="tag in car.tags"
            :key="tag.name"
            class="px-1 text-black text-xs text-opacity-60 rounded"
            :style="`background-color: ${tag.color}`"
          >
            {{ tag.name }}
          </li>
        </ul>

        <div class="meta">
          <p class="flex items-center">
            <span
              class="mr-2 material-icons opacity-60"
              style="font-size: 12px"
              >{{ car.ownerType }}</span
            ><span class="text-xs opacity-60">{{ car.ownerName }}</span>
          </p>
          <p class="flex items-center">
            <span class="mr-2 material-icons opacity-60" style="font-size: 12px"
              >place</span
            >
            <span class="text-xs opacity-60">{{ car.city }}</span>
          </p>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CarListItemFour",

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
