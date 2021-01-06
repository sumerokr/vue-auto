<template>
  <ul>
    <li v-for="item in list" class="item" :key="key ? item[key] : item">
      <button class="button" type="button">
        <span v-if="before" class="material-icons before">{{ before }}</span>
        <span class="content"
          ><slot>{{ text ? item.text : item }}</slot></span
        >
        <span v-if="after" class="material-icons after">{{ after }}</span>
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppList",

  props: {
    list: {
      type: Array,
      required: true,
    },
    key: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    before: {
      type: String,
    },
    after: {
      type: String,
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
