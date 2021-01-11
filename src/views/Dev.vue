<template>
  <div class="p-4">
    <div class="fixed z-50 inset-0 p-4 shadow-8 grid bg-white">
      <div class="flex flex-col">
        <AppInput label="Make" v-model="query" />

        <div
          v-if="filtered"
          class="py-2 flex flex-col"
          style="min-height: 0; flex-basis: 0; flex-grow: 1"
        >
          <div style="overflow-y: scroll">
            <ul>
              <AppListItemInteractive
                v-for="makeModel in filtered"
                class="item"
                :class="{ 'is-expanded': expanded[makeModel.make] }"
                :key="makeModel.make"
                @click-button="toggleMake(makeModel.make)"
              >
                <template #after>
                  <IconButton
                    :icon="
                      expanded[makeModel.make] ? 'expand_less' : 'expand_more'
                    "
                  />
                </template>
                {{ makeModel.make }}
                <template #nested>
                  <div v-if="expanded[makeModel.make]">
                    <ul v-if="makeModel.models.length">
                      <AppListItemInteractive
                        v-for="model in makeModel.models"
                        class="sub-item"
                        :interactive="['before']"
                        :key="model"
                        @click-button="toggleModel(makeModel.make, model)"
                      >
                        <template #before>
                          <IconButton
                            :icon="
                              selected[makeModel.make] &&
                              selected[makeModel.make].includes(model)
                                ? 'check_box'
                                : 'check_box_outline_blank'
                            "
                            @click="toggleModel(makeModel.make, model)"
                          />
                        </template>
                        {{ model }}
                      </AppListItemInteractive>
                    </ul>
                    <div v-else>
                      <p class="py-3 px-4">No data, or loading...</p>
                    </div>
                  </div>
                </template>
              </AppListItemInteractive>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <AppButton>Cancel</AppButton>
          <AppButton appearance="primary">Confirm</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import AppListItemInteractive from "@/components/AppList/AppListItemInteractive.vue";
import { delay } from "@/utils";
import { makeModels } from "@/faker/cars.ts";
import IconButton from "@/components/IconButton/IconButton.vue";
import { MakesModelsItem } from "@/types.ts";

export default defineComponent({
  name: "Cars",

  components: { AppInput, AppButton, AppListItemInteractive, IconButton },

  setup: () => {
    const query = ref("");

    const makes = ref<MakesModelsItem[]>([]);
    const filtered = ref<MakesModelsItem[]>(makes.value);

    const getMakesModels = async () => {
      await delay(300);
      filtered.value = makeModels.reduce((acc, mm) => {
        const isMakeMatch = mm.make.toLowerCase().includes(query.value);
        if (isMakeMatch) {
          acc.push(mm);
          return acc;
        }

        const matchedModels = mm.models.filter((md) => {
          return md.toLowerCase().includes(query.value);
        });

        if (matchedModels.length > 0) {
          acc.push({
            make: mm.make,
            models: matchedModels,
          });
        }

        return acc;
      }, [] as MakesModelsItem[]);
    };

    const getMakes = async () => {
      await delay(300);
      makes.value = makeModels.map((mm) => ({ make: mm.make, models: [] }));
      filtered.value = makes.value;
    };
    getMakes();

    const expanded = ref<{ [key: string]: boolean }>({});

    const getModels = async (make: string) => {
      await delay(300);
      const makeModel = makeModels.find((mm) => mm.make === make);
      if (makeModel) {
        const match = filtered.value.find((mm) => mm.make === make);
        if (match) {
          match.models = makeModel.models;
        }
      }
    };

    const toggleMake = (make: string) => {
      if (query.value.trim() === "") {
        getModels(make);
      }
      expanded.value[make] = !expanded.value[make];
    };

    const selected = ref<{ [key: string]: string[] }>({});
    const toggleModel = (make: string, model: string) => {
      if (selected.value[make]) {
        if (selected.value[make].includes(model)) {
          selected.value[make] = [
            ...selected.value[make].filter((_model) => _model !== model),
          ];
        } else {
          selected.value[make] = [...selected.value[make], model];
        }
      } else {
        selected.value[make] = [model];
      }
    };

    watch(query, () => {
      if (query.value.trim() === "") {
        filtered.value = makes.value;
        return;
      }
      getMakesModels();
      expanded.value = {};
      selected.value = {};
    });

    return {
      query,
      expanded,
      toggleMake,
      selected,
      toggleModel,
      filtered,
    };
  },
});
</script>

<style scoped>
.item.is-expanded {
  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.12),
    inset 0 -1px 0 rgba(0, 0, 0, 0.12);
}
</style>
