<template>
  <template v-if="props.data?.length !== 0">
    <div class="items d-flex">
      <MovieCards :data="props.data" />
    </div>

    <div class="loader">
      <Button
        :charEnded="props.charEnded"
        :page="props.page"
        :loading="newItemLoading"
        :onClick="loadMore"
        >Load more</Button
      >
    </div>
  </template>
  <template v-else>
    <h2>Нет данных</h2>
  </template>
</template>

<script lang="ts" setup>
import MovieCards from "@/common/components/MovieCards.vue";
import { MovieCardsProps } from "@/common/entity/movieCards";
import { defineProps, PropType } from "vue";
import Button from "@/common/components/Button.vue";

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

.loader {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
}
</style>
