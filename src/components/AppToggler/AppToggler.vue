<template>
  <div class="wrapper">
    <div class="rail">
      <input
        hidden
        v-bind="$attrs"
        type="checkbox"
        :value="modelValue"
        @change="
          $emit(
            'update:modelValue',
            $event.target.checked ? trueValue : falseValue
          )
        "
      />
      <label :for="$attrs.id" class="knob">
        <span class="toggler shadow-2"></span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppToggler",

  inheritAttrs: false,

  props: {
    modelValue: null, // any
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
  },
  emits: ["update:modelValue"],
});
</script>

<style scoped>
.wrapper {
  padding: 18px;
}

.rail {
  flex-shrink: 0;
  display: flex;
  border-radius: 10px;
  width: 36px;
  background-color: #eee;
}

.knob {
  box-sizing: content-box;
  margin: -18px;
  border-radius: 50%;
  padding: 14px;
  width: 20px;
  height: 20px;
  transition: all 0.1s;
}

.knob:active {
  background-color: #d1d5db;
}

input[type="checkbox"]:checked ~ .knob {
  transform: translateX(24px);
}

.toggler {
  content: "";
  display: block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  transition: all 0.1s;
}

input[type="checkbox"]:checked ~ .knob .toggler {
  background-color: #1d4ed8;
}
</style>
