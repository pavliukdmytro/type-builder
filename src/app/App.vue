<template>
  <div class="app">
    <AppInput v-model="inputValue" @input="handlerInput" />
    {{ inputValue }}
    <div>
      <AppItem :result="data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

import AppInput from './AppInput.vue';

import AppItem from './AppItem';

const inputValue = ref('');
const inputItems = reactive([]);
const data = {
  id: 12,
  text: 'Hello world!!!',
};

const handlerInput = (e: PointerEvent) => {
  const { value } = e.target as HTMLInputElement;

  // inputValue.value = value;
  inputItems.push({
    id: Date.now(),
    text: value,
  });
};
</script>

<style lang="scss" scoped>
.app {
}
</style>
