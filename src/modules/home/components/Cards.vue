<template>
  <div class="items d-flex">
    <MovieCards :data="props.data" />
  </div>
</template>

<script lang="ts" setup>
import MovieCards from "@/common/components/MovieCards.vue";
import { MovieCardsProps } from "@/common/entity/movieCards";
import { defineProps, PropType } from "vue";


export type LoadMoreFn = (page?: number) => Promise<MovieCardsProps[]>;

const props = defineProps({
  data: {
    type: Array as PropType<MovieCardsProps[]>,
    required: false,
  },
  loadMore: {
    type: Function as PropType<LoadMoreFn>,
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
  newItemLoading: {
    type: Boolean,
    required: false,
  },
});
</script>

<style scoped>
.items {
  flex-wrap: wrap;
  gap: 4rem 10px;
}
</style>
