<template>
  <div>
    {{ result }}
    <div>{{ result.id }}</div>
    <div>{{ result.text }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from 'vue';

interface Props {
  result: {
    id: number;
    text: string;
  };
}

const props = defineProps<Props>();
const result = reactive(props.result);
</script>

<style lang="scss" scoped></style>
