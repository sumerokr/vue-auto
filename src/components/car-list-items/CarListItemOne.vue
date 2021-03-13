<template>
  <div class="card">
    <RouterLink class="link" :to="{ name: 'Car', params: { id: car.id } }">
      <div class="image-wrapper">
        <img
          class="w-full align-top"
          :src="car.images[0]"
          width="320"
          height="240"
          alt=""
        />
        <img
          class="w-full align-top"
          :src="car.images[1]"
          width="320"
          height="240"
          alt=""
        />
        <img
          class="w-full align-top"
          :src="car.images[2]"
          width="320"
          height="240"
          alt=""
        />
      </div>

      <div class="content">
        <div class="price-wrapper">
          <span class="price">{{ numberFormatter.format(car.price) }} €</span>
          <IconButton
            :icon="isBookmarked ? 'bookmark' : 'bookmark_border'"
            class="bookmark"
            type="button"
            @click.prevent="toogleIsBookmared"
          />
        </div>

        <h2 class="title">{{ car.make }} {{ car.model }}</h2>

        <ul class="params">
          <li>{{ car.year }}</li>
          <li>{{ numberFormatter.format(car.mileage) }} km</li>
          <li>{{ car.gearbox }}</li>
          <li>{{ car.fuel }}</li>
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
    const isBookmarked = ref(false);
    const toogleIsBookmared = () => {
      isBookmarked.value = !isBookmarked.value;
    };

    return {
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
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
}

.image-wrapper {
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 3fr 3fr;
}

.image-wrapper > img:first-child {
  grid-row: 1 / 3;
}

.image-wrapper > img:nth-child(2) {
  clip-path: inset(0 0 1px 2px);
}

.image-wrapper > img:nth-child(3) {
  clip-path: inset(1px 0 0 2px);
}

.link {
  flex-grow: 1; /* importnat to keep horizontal pace */
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
}

.price-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
}

.price {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: var(--color-text-primary);
}

.title {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--font-family-default);
  line-height: 24px;
  color: var(--color-text-secondary);
}

.bookmark {
  margin: -12px -12px -12px 12px;
}

.bookmark-icon {
  color: var(--color-text-secondary);
}

.params {
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 20px;
  font-family: var(--font-family-default);
  color: var(--color-text-secondary);
}

.params > li {
  display: inline-block;
}

.params > li:not(:first-child)::before {
  content: "•";
  display: inline-block;
  margin-right: 6px;
  margin-left: 6px;
  color: var(--color-text-mute);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
}

.tag {
  padding: 2px 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: var(--font-family-condensed);
  line-height: 18px;
  color: var(--color-text-quite);
}

.meta {
  margin-top: auto;
  display: grid;
  gap: 8px;
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
