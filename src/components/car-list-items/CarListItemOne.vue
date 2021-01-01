<template>
  <div class="card shadow-1 rounded" ref="root">
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
        <h2 class="title">
          <span class="title-text">{{ car.brand }} {{ car.model }}</span>
          <IconButton
            hidden
            class="bookmark"
            type="button"
            @click.prevent="toogleIsBookmared"
          >
            <span class="bookmark-icon material-icons">{{
              isBookmarked ? "bookmark" : "bookmark_border"
            }}</span>
          </IconButton>
        </h2>

        <p class="price">{{ numberFormatter.format(car.price) }} €</p>

        <ul class="params">
          <li>{{ String(car.month + 1).padStart(2, "0") }}/{{ car.year }}</li>
          <li>{{ car.fuel }}</li>
          <li>{{ numberFormatter.format(car.mileage) }} km</li>
          <li>{{ car.gearbox }}</li>
          <li>{{ car.power }} hp</li>
          <li>{{ car.drivetrain }}</li>
        </ul>

        <ul v-if="car.tags.length" class="tags">
          <li
            v-for="tag in car.tags"
            :key="tag.name"
            class="tag rounded"
            :style="`background-color: ${tag.color}`"
          >
            {{ tag.name }}
          </li>
        </ul>

        <div class="meta">
          <p class="meta-item">
            <span class="meta-icon material-icons">{{ car.ownerType }}</span
            ><span class="meta-text">{{ car.ownerName }}</span>
          </p>
          <p class="meta-item">
            <span class="meta-icon material-icons">place</span>
            <span class="meta-text">{{ car.city }}</span>
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import { mq } from "@/utils";

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
    const relevantBps = mq({ refEl: root, bps: [240, 320] });

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
  overflow: hidden;
  display: flex;
}

.link {
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 11px 12px;
}

.card[data-mq*="240"] .content {
  padding: 14px 16px;
}

.title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
}

.title-text {
  font-size: 20px;
  font-weight: 500;
  font-family: var(--font-family-condensed);
  line-height: 24px;
  color: var(--color-text-primary);
}

.card[data-mq*="240"] .title-text {
  font-family: var(--font-family-default);
}

.bookmark {
  margin: -12px -12px -12px 12px;
}

.bookmark-icon {
  color: var(--color-text-secondary);
}

.price {
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 600;
  font-family: var(--font-family-default);
  line-height: 1;
  color: var(--color-text-primary);
}

.params {
  margin-bottom: 12px;
  display: grid;
  gap: 4px 8px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  font-size: 16px;
  line-height: 20px;
  font-family: var(--font-family-condensed);
  color: var(--color-text-secondary);
}

.card[data-mq*="240"] .params {
  font-size: 16px;
  line-height: 20px;
  font-family: var(--font-family-default);
}

.card[data-mq*="320"] .params {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 12px;
}

.tag {
  padding: 2px 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: var(--font-family-condensed);
  line-height: 18px;
  color: var(--color-text-quite);
}

.card[data-mq*="320"] .tag {
  font-family: var(--font-family-default);
}

.meta {
  margin-top: auto;
  display: grid;
  gap: 2px 8px;
}

.card[data-mq*="320"] .meta {
  justify-content: space-between;
  align-items: start;
  grid-template-columns: repeat(2, minmax(0, auto));
}

.meta-item {
  display: flex;
  align-items: flex-start;
}

.meta-icon {
  margin-right: 6px;
  padding-top: 1px;
  padding-bottom: 1px;
  font-size: 14px;
  color: var(--color-text-quite);
}

.meta-text {
  font-size: 12px;
  line-height: 16px;
  font-family: var(--font-family-default);
  color: var(--color-text-secondary);
}
</style>
