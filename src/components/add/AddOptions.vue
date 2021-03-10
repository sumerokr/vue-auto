<template>
  <h2 class="text-2xl mb-6">Options</h2>
  <div class="grid gap-6">
    <div>
      <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
        Comfort
      </h4>
      <ul class="-mx-4">
        <AppListItemInteractive
          v-for="item in optionContent.find((oc) => oc.category === 'Comfort')
            .items"
          :key="item"
          :interactive="['before']"
          @click="onCheck('comfort', item)"
        >
          <template #before>
            <IconButton
              type="button"
              :icon="
                comfort.includes(item) ? 'check_box' : 'check_box_outline_blank'
              "
            />
          </template>
          {{ item }}
        </AppListItemInteractive>
      </ul>
    </div>

    <div>
      <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
        Multimedia
      </h4>
      <ul class="-mx-4">
        <AppListItemInteractive
          v-for="item in optionContent.find(
            (oc) => oc.category === 'Multimedia'
          ).items"
          :key="item"
          @click="onCheck('multimedia', item)"
        >
          <template #before>
            <IconButton
              type="button"
              :icon="
                multimedia.includes(item)
                  ? 'check_box'
                  : 'check_box_outline_blank'
              "
            />
          </template>
          {{ item }}
        </AppListItemInteractive>
      </ul>
    </div>

    <div>
      <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">
        Safety
      </h4>
      <ul class="-mx-4">
        <AppListItemInteractive
          v-for="item in optionContent.find((oc) => oc.category === 'Safety')
            .items"
          :key="item"
          @click="onCheck('safety', item)"
        >
          <template #before>
            <IconButton
              type="button"
              :icon="
                safety.includes(item) ? 'check_box' : 'check_box_outline_blank'
              "
            />
          </template>
          {{ item }}
        </AppListItemInteractive>
      </ul>
    </div>

    <div>
      <h4 class="text-sm font-medium text-black text-opacity-60 mb-2">Extra</h4>
      <ul class="-mx-4">
        <AppListItemInteractive
          v-for="item in optionContent.find((oc) => oc.category === 'Extra')
            .items"
          :key="item"
          @click="onCheck('extra', item)"
        >
          <template #before>
            <IconButton
              type="button"
              :icon="
                extra.includes(item) ? 'check_box' : 'check_box_outline_blank'
              "
            />
          </template>
          {{ item }}
        </AppListItemInteractive>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import AppListItemInteractive from "@/components/AppList/AppListItemInteractive.vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import { optionContent } from "@/db/index.ts";

export default defineComponent({
  name: "AddOptions",

  components: { AppListItemInteractive, IconButton },

  setup: () => {
    const params: Record<string, string[]> = reactive({
      comfort: [],
      multimedia: [],
      safety: [],
      extra: [],
    });

    const onCheck = (option: string, item: string) => {
      params[option].includes(item)
        ? params[option].splice(params[option].indexOf(item), 1)
        : params[option].push(item);
    };

    return {
      ...toRefs(params),
      onCheck,
      optionContent,
    };
  },
});
</script>

<style scoped></style>
