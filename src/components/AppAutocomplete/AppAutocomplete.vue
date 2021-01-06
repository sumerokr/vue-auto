<template>
  <div class="flex flex-col">
    <AppInput
      :model-value="modelValue"
      :label="label"
      @update:model-value="$emit('update:model-value', $event)"
    />
    <div
      v-if="list"
      class="py-2 flex flex-col"
      style="min-height: 0; flex-basis: 0; flex-grow: 1"
    >
      <div style="overflow-y: scroll">
        <ul>
          <li v-for="item in list" class="item" :key="key ? item[key] : item">
            <button class="button" type="button">
              <span v-if="before" class="material-icons before">{{
                before
              }}</span>
              <span class="content"
                ><slot>{{ text ? item.text : item }}</slot></span
              >
              <span v-if="after" class="material-icons after">{{ after }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex space-x-4">
      <AppButton>Cancel</AppButton>
      <AppButton appearance="primary">Confirm</AppButton>
    </div>
  </div>
</template>

<script lang="ts">
import AppList from "@/components/AppList/AppList.vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppAutocomplete",

  components: {
    AppInput,
    AppButton,
  },

  props: {
    modelValue: {
      type: null,
    },
    label: {
      type: String,
    },
    list: {
      type: Array,
      required: true,
    },
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
