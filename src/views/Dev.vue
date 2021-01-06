<template>
  <div class="p-4">
    <div class="fixed z-50 inset-0 p-4 rounded shadow-8 grid bg-white">
      <div class="flex flex-col">
        <AppInput label="Make" v-model="query" />

        <div
          v-if="filtered"
          class="py-2 flex flex-col"
          style="min-height: 0; flex-basis: 0; flex-grow: 1"
        >
          <div style="overflow-y: scroll">
            <ul>
              <li v-for="make in filtered" class="item" :key="make">
                <button class="button" type="button" @click="toggleMake(make)">
                  <span class="content">{{ make }}</span>
                  <span class="material-icons after">{{
                    expanded[make] ? "expand_less" : "expand_more"
                  }}</span>
                </button>

                <div v-if="expanded[make]">
                  <ul v-if="models[make]">
                    <li
                      v-for="model in models[make]"
                      class="sub-item"
                      :key="model"
                    >
                      <button
                        class="button"
                        type="button"
                        @click="toggleModel(make, model)"
                      >
                        <span class="material-icons before">{{
                          selected[make] && selected[make].includes(model)
                            ? "check_box"
                            : "check_box_outline_blank"
                        }}</span>
                        <span class="content">{{ model }}</span>
                      </button>
                    </li>
                  </ul>
                  <div v-else>
                    <p class="py-3 px-4">No data, or loading...</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex space-x-4">
          <AppButton>Cancel</AppButton>
          <AppButton appearance="primary">Confirm</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { delay } from "@/utils";
import { makeModels } from "@/faker/cars.ts";

export default defineComponent({
  name: "Cars",

  components: { AppInput, AppButton },

  setup: () => {
    const query = ref("");

    const makes = ref<string[]>([]);
    const filtered = computed(() =>
      makes.value.filter((i) =>
        i.toLowerCase().includes(query.value.toLowerCase())
      )
    );

    const getMakes = async () => {
      await delay(300);
      makes.value = makeModels.map((mm) => mm.make);
    };
    getMakes();

    const expanded = ref<{ [key: string]: boolean }>({});
    const models = ref<{ [key: string]: string[] }>({});

    const getModels = async (make: string) => {
      await delay(300);
      const makeModel = makeModels.find((mm) => mm.make === make);
      if (makeModel) {
        models.value[make] = makeModel.models;
      }
    };

    const toggleMake = (make: string) => {
      expanded.value[make] = !expanded.value[make];
      getModels(make);
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

    return {
      query,
      makes,
      models,
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
.button {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  padding: 12px 16px;
  text-align: left;
  outline: none;
}

.content {
  flex-grow: 1;
}

.before,
.after {
  color: var(--color-text-quite);
}

.before {
  margin-right: 32px;
}

.after {
  margin-left: 32px;
}
</style>
