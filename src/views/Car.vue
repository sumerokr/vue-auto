<template>
  <div
    v-if="car"
    class="bg-white mb-2"
    style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12)"
  >
    <!-- main slider -->
    <div class="relative z-10 mb-4">
      <ul
        class="slider flex overflow-x-scroll"
        style="scroll-snap-type: x mandatory"
      >
        <li
          v-for="(image, index) in car.images"
          :key="image"
          class="flex-shrink-0 w-full"
          style="scroll-snap-align: start"
        >
          <img
            class="w-full"
            :src="image"
            width="320"
            height="240"
            alt=""
            :loading="index > 0 ? 'lazy' : 'auto'"
            @click="activateGallery(index)"
          />
        </li>
      </ul>

      <div
        class="absolute bottom-4 right-4 rounded flex items-center py-1 px-2 bg-black bg-opacity-50 pointer-events-none"
      >
        <span
          class="material-icons mr-1.5 text-white text-opacity-60"
          style="font-size: 18px"
          >collections</span
        >
        <span class="text-white text-sm text-opacity-100">{{
          car.images.length
        }}</span>
      </div>
    </div>
    <!-- /main slider -->

    <!-- thumbs -->
    <ul
      class="flex overflow-x-scroll mb-4 space-x-2"
      style="scroll-snap-type: x mandatory; scroll-padding: 0 1rem"
    >
      <li class="flex-shrink-0 w-2">&nbsp;</li>
      <li
        v-for="(image, index) in car.images"
        :key="image"
        class="flex-shrink-0"
        style="scroll-snap-align: start; max-width: 120px"
        @click="
          () => {
            goTo(index);
          }
        "
      >
        <img
          class="max-w-full rounded"
          :src="image"
          width="320"
          height="240"
          alt=""
          loading="lazy"
        />
      </li>
      <li class="flex-shrink-0 w-2">&nbsp;</li>
    </ul>
    <!-- /thumbs -->

    <!-- gallery -->
    <div
      v-if="isGalleryActive"
      class="fixed z-50 inset-0 flex flex-col bg-black bg-opacity-90"
      @click.self="deactivateGallry"
    >
      <div class="p-4 flex items-center justify-end">
        <span class="material-icons text-white" @click="isGalleryActive = false"
          >close</span
        >
      </div>
      <ul class="overflow-y-auto space-y-2 bg-white" ref="galleryList">
        <li v-for="image in car.images" :key="image" class="shadow">
          <img
            class="w-full"
            :src="image"
            width="320"
            height="240"
            alt=""
            loading="lazy"
          />
        </li>
      </ul>
    </div>
    <!-- /gallery -->

    <div class="p-4">
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

      <h1 class="mb-4 text-3xl">{{ car.make }} {{ car.model }}</h1>

      <div class="mb-8 text-2xl flex items-center">
        <span class="font-semibold text-black text-opacity-90"
          >{{ numberFormatter.format(car.price) }} €</span
        >
        <IconButton
          icon="timeline"
          class="-my-2 ml-3"
          type="button"
          @click="isHistoryVisible = true"
        />
        <IconButton
          :icon="isBookmarked ? 'bookmark' : 'bookmark_border'"
          class="-my-2 -mr-3 ml-auto"
          type="button"
          @click="toogleIsBookmared"
        />
      </div>

      <!-- details -->
      <h3 class="text-xl mb-2">Details</h3>
      <table class="mb-8">
        <tbody>
          <tr
            v-for="[key, val] in [
              ['Produced', dateFormatter.format(new Date(car.year, car.month))],
              ['Fuel', car.fuel],
              ['Mileage', `${numberFormatter.format(car.mileage)} km`],
              ['Gearbox', car.gearbox],
              ['Power', `${car.power} hp`],
              ['Drivetrain', car.drivetrain],
              [
                'Registered till',
                dateFormatter.format(
                  new Date(car.registeredTillYear, car.registeredTillMonth)
                ),
              ],
              ['Drivetrain', car.drivetrain],
            ]"
            :key="key"
          >
            <td class="pr-8 text-black text-opacity-60">{{ key }}</td>
            <td class="text-black text-opacity-90">{{ val }}</td>
          </tr>
        </tbody>
      </table>
      <!-- /details -->

      <!-- description -->
      <h3 class="text-xl mb-2">Description</h3>
      <div class="mb-8 border-l-2 pl-4">
        <p class="mb-4 text-black text-opacity-90">
          Lato is a sans serif typeface family started in the summer of 2010 by
          Warsaw-based designer Łukasz Dziedzic (“Lato” means “Summer” in
          Polish). In December 2010 the Lato family was published under the Open
          Font License by his foundry tyPoland, with support from Google.
        </p>
        <p class="flex items-center">
          <span
            class="mr-2 material-icons opacity-60"
            style="font-size: 20px"
            >{{ car.ownerType }}</span
          ><span class="text-sm opacity-60">{{ car.ownerName }}</span>
        </p>
      </div>
      <!-- /description -->

      <!-- options -->
      <h3 class="text-xl mt-12 mb-2">Options</h3>
      <div class="space-y-6">
        <div v-for="option in car.options" :key="option">
          <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
            {{ option.category }}
          </h4>
          <ul class="list-disc list-inside">
            <li
              v-for="item in option.items"
              :key="item"
              class="text-black text-opacity-90"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- options -->
    </div>
  </div>

  <!-- seller info -->
  <div
    v-if="car"
    class="mb-2 p-4 bg-white"
    style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12)"
  >
    <h3 class="text-lg mb-6">Seller info</h3>
    <p class="seller-info-item gap-x-4 mb-2">
      <span class="material-icons opacity-60">{{ car.ownerType }}</span>
      <a class="col-start-2 text-blue-700 text-opacity-90">{{
        car.ownerName
      }}</a>
      <span class="col-start-2 text-xs text-black text-opacity-60"
        >registered 2 years ago</span
      >
    </p>
    <p class="seller-info-item gap-x-4 mb-2">
      <span class="material-icons opacity-60">place</span>
      <a class="col-start-2 text-blue-700 text-opacity-90">{{ car.city }}</a>
      <span
        v-if="car.ownerType === 'business'"
        class="col-start-2 text-xs text-black text-opacity-60"
        >Unknown street, 64-128</span
      >
    </p>
    <p
      v-if="car.ownerType === 'business'"
      class="seller-info-item gap-x-4 mb-2"
    >
      <span class="material-icons opacity-60">web</span>
      <a class="col-start-2 text-blue-700 text-opacity-90">carparts.com</a>
      <span class="col-start-2 text-xs text-black text-opacity-60"
        >Official website</span
      >
    </p>
    <p
      v-if="car.ownerType === 'business'"
      class="seller-info-item gap-x-4 mb-2"
    >
      <span class="material-icons opacity-60">schedule</span>
      <span class="col-start-2 text-black text-opacity-90">09:00 – 18:00</span>
      <span class="col-start-2 text-xs text-black text-opacity-60"
        >Saturday: 10:00 – 12:00</span
      >
    </p>
  </div>
  <!-- /seller info -->

  <!-- seller contacts -->
  <div
    class="sticky bottom-0 mb-2 p-4 bg-white flex space-x-4"
    style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12)"
  >
    <AppButton appearance="primary" before="call" class="flex-1"
      >Call</AppButton
    >
    <AppButton appearance="primary" before="message" class="flex-1"
      >Message</AppButton
    >
  </div>
  <!-- /seller contacts -->

  <div
    v-if="car"
    class="p-4 bg-white"
    style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12)"
  >
    <h3 class="seller-info-item gap-x-4 mb-4">
      <span class="material-icons opacity-60">list</span>
      <span class="col-start-2 text-black text-opacity-90">Similiar cars</span>
    </h3>

    <!-- related -->
    <ul
      class="flex overflow-x-scroll -mx-4 space-x-2 py-0.5"
      style="scroll-snap-type: x mandatory; scroll-padding-left: 1rem"
    >
      <li class="flex-shrink-0 w-2">&nbsp;</li>
      <CarCardCompact :car="car" />
      <CarCardCompact :car="car" />
      <CarCardCompact :car="car" />
      <CarCardCompact :car="car" />
      <li class="flex-shrink-0 w-2">&nbsp;</li>
    </ul>
    <!-- /related -->
  </div>

  <teleport to="body">
    <transition name="pop-top">
      <AppModal v-if="isHistoryVisible" @close="onClose">
        <h2 class="text-xl mb-4">Price history</h2>
        <table>
          <thead>
            <tr>
              <th class="py-1 text-left font-medium">Date</th>
              <th class="py-1 text-right pl-16 font-medium">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-1">27.01.2021</td>
              <td class="py-1 text-red-800 text-right">
                {{ numberFormatter.format(car.price + 300) }} €
              </td>
            </tr>
            <tr>
              <td class="py-1">13.01.2021</td>
              <td class="py-1 text-green-800 text-right">
                {{ numberFormatter.format(car.price - 1000) }} €
              </td>
            </tr>
            <tr>
              <td class="py-1">02.01.2021</td>
              <td class="py-1 text-right">
                {{ numberFormatter.format(car.price) }} €
              </td>
            </tr>
          </tbody>
        </table>
      </AppModal>
    </transition>
  </teleport>

  <!-- bottom bar -->
  <!-- <div
    class="shadow-8 fixed z-40 bottom-0 px-4 py-2.5 right-0 left-0 flex items-center bg-white"
    style="box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.12)"
  >
    <IconButton class="-my-1.5" icon="phone" />

    <IconButton class="-my-1.5" icon="message" />

    <IconButton
      class="-my-1.5"
      :icon="isBookmarked ? 'bookmark' : 'bookmark_border'"
      @click.prevent="toogleIsBookmared"
    />
  </div> -->
  <!-- /bottom bar -->
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import CarCardCompact from "@/components/CarCardCompact/CarCardCompact.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import AppModal from "@/components/AppModal/AppModal.vue";
import { useCar } from "@/services/cars/adapter.ts";

export default defineComponent({
  name: "Car",

  components: {
    IconButton,
    AppButton,
    AppModal,
    CarCardCompact,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup: (props) => {
    const galleryList = ref();
    const { data: car, send: getCar } = useCar();
    getCar(props.id);

    const isGalleryActive = ref(false);

    const isBookmarked = ref(false);
    const toogleIsBookmared = () => {
      isBookmarked.value = !isBookmarked.value;
    };

    const isHistoryVisible = ref(false);

    return {
      galleryList,
      isBookmarked,
      toogleIsBookmared,
      car,
      isGalleryActive,
      activateGallery: async (index: number) => {
        isGalleryActive.value = true;
        await nextTick();
        galleryList.value.children[index].scrollIntoView();
      },
      deactivateGallry: () => {
        isGalleryActive.value = false;
      },
      goTo: (index: number) => {
        const slider = document.querySelector(".slider");
        if (!slider) {
          return;
        }
        slider.children[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      },
      isHistoryVisible,
      onClose: () => {
        isHistoryVisible.value = false;
      },
      dateFormatter: new Intl.DateTimeFormat(window.navigator.language, {
        month: "2-digit",
        year: "numeric",
      }),
      numberFormatter: new Intl.NumberFormat(window.navigator.language),
    };
  },
});
</script>

<style scoped>
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

.car-card-compact {
  flex-shrink: 0;
  scroll-snap-align: start;
}

.seller-info-item {
  display: grid;
  grid-template-columns: 24px 1fr;
}

.pop-top-enter-active {
  transition: opacity 0.2s ease-out;
}
.pop-top-leave-active {
  transition: opacity 0.2s ease-in;
}
.pop-top-enter-from,
.pop-top-leave-to {
  opacity: 0;
}
</style>
