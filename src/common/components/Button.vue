<template>
  <v-btn
    :disabled="props.charEnded"
    :style="{ display: props.charEnded ? 'none' : '' }"
    :loading="loading"
    color="primary"
    @click.prevent="onClick?.(props.page)"
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts" setup>
import { LoadMoreFn } from "@/modules/home/components/Cards.vue";
import { defineProps, PropType } from "vue";

const props = defineProps({
  onClick: {
    type: Function as PropType<LoadMoreFn | (() => void)>,
    required: false,
  },
  page: {
    type: Number,
    required: false,
  },
  charEnded: {
    type: Boolean,
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
  },
});
</script>
