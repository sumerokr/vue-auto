<template>
  <div class="card shadow-1 rounded overflow-hidden" ref="root">
    <RouterLink class="link" :to="{ name: 'Car', params: { id: car.id } }">
      <p class="image-wrapper">
        <img
          class="w-full align-top"
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

      <div class="content">
        <h2 class="title flex items-start justify-between font-medium">
          <span class="title-text">{{ car.brand }} {{ car.model }}</span>
          <IconButton
            hidden
            class="bookmark"
            type="button"
            :is-dense="!relevantBps.includes(288)"
            @click.prevent="toogleIsBookmared"
          >
            <span class="bookmark-icon material-icons">{{
              isBookmarked ? "bookmark" : "bookmark_border"
            }}</span>
          </IconButton>
        </h2>

        <p class="price font-semibold">
          {{ numberFormatter.format(car.price) }} €
        </p>

        <ul class="params">
          <li>{{ String(car.month + 1).padStart(2, "0") }}/{{ car.year }}</li>
          <li>{{ car.fuel }}</li>
          <li>{{ numberFormatter.format(car.mileage) }} km</li>
          <li>{{ car.gearbox }}</li>
          <li>{{ car.power }} hp</li>
          <li>{{ car.drivetrain }}</li>
        </ul>

        <ul v-if="car.tags.length" class="tags flex flex-wrap gap-1">
          <li
            v-for="tag in car.tags"
            :key="tag.name"
            class="tag rounded font-condensed"
            :style="`background-color: ${tag.color}`"
          >
            {{ tag.name }}
          </li>
        </ul>

        <div class="meta">
          <p class="flex items-start">
            <span class="meta-icon material-icons">{{ car.ownerType }}</span
            ><span class="meta-text">{{ car.ownerName }}</span>
          </p>
          <p class="flex items-start">
            <span class="meta-icon material-icons">place</span>
            <span class="meta-text">{{ car.city }}</span>
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";

export default defineComponent({
  name: "CarListItemOne",

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
    const root = ref(null);
    const relevantBps = ref<number[]>([]);
    // @ts-expect-error
    const ro = new window.ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        const bps = [188, 288, 420];
        relevantBps.value = bps.filter((bp) => bp <= cr.width);
        entry.target.dataset.mq = relevantBps.value.join(",");
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
      relevantBps,
      isBookmarked,
      toogleIsBookmared,
      numberFormatter: new Intl.NumberFormat("ru-RU"),
    };
  },
});
</script>

<style scoped>
.card {
  display: flex;
}

.link {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.card[data-mq*="188"] .content {
  padding: 12px;
}

.card[data-mq*="288"] .content {
  padding: 16px;
}

.title {
  margin-bottom: 6px;
}

.card[data-mq*="288"] .title {
  margin-bottom: 8px;
}

.title-text {
  font-size: 14px;
  line-height: 18px;
  font-family: var(--font-family-condensed);
  color: var(--color-text-primary);
}

.card[data-mq*="188"] .title-text {
  font-size: 18px;
  line-height: 20px;
}

.card[data-mq*="288"] .title-text {
  padding-top: 1px;
  padding-bottom: 1px;
  font-size: 16px;
  font-family: var(--font-family-default);
  line-height: 22px;
}

.bookmark {
  margin: -10px -10px -10px 4px;
}

.card[data-mq*="288"] .bookmark {
  margin: -12px;
}

.bookmark-icon {
  font-size: 20px;
  color: var(--color-text-secondary);
}

.card[data-mq*="288"] .bookmark-icon {
  font-size: 24px;
}

.price {
  margin-bottom: 8px;
  font-size: 18px;
  font-family: var(--font-family-default);
  line-height: 1;
  color: var(--color-text-primary);
}

.card[data-mq*="188"] .price {
  margin-bottom: 12px;
  font-size: 22px;
}

.card[data-mq*="288"] .price {
  margin-bottom: 12px;
  font-size: 20px;
}

.params {
  margin-bottom: 6px;
  display: grid;
  gap: 0px 8px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  font-size: 12px;
  font-family: var(--font-family-condensed);
  color: var(--color-text-secondary);
}

.card[data-mq*="188"] .params {
  gap: 1px 8px;
  margin-bottom: 8px;
  font-family: var(--font-family-default);
  font-size: 14px;
}

.card[data-mq*="288"] .params {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px 8px;
  margin-bottom: 8px;
  font-size: 14px;
}

.tags {
  margin-bottom: 8px;
}

.card[data-mq*="288"] .tags {
  margin-bottom: 12px;
}

.tag {
  padding: 0 4px;
  font-size: 12px;
  line-height: 18px;
  color: var(--color-text-quite);
}

.meta {
  margin-top: auto;
  display: grid;
  gap: 2px 8px;
  justify-content: space-between;
  align-items: start;
}

.card[data-mq*="288"] .meta {
  grid-template-columns: repeat(2, minmax(0, auto));
}

.meta-icon {
  margin-right: 6px;
  padding-top: 1px;
  padding-bottom: 1px;
  font-size: 14px;
  color: var(--color-text-quite);
}

.card[data-mq*="188"] .meta-icon {
  margin-right: 8px;
}

.meta-text {
  font-size: 12px;
  line-height: 16px;
  font-family: var(--font-family-default);
  color: var(--color-text-quite);
}

.card[data-mq*="288"] .meta-text {
  font-family: var(--font-family-default);
}
</style>
