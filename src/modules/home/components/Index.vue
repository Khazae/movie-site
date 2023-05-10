<template>
  <template>
    
  </template>
  <Cards
    :data="props.data"
    :loadMore="props.loadMore"
    :page="props.page"
    :charEnded="charEnded"
    :newItemLoading="newItemLoading"
  />
</template>

<script lang="ts" setup>
import { MovieCardsProps } from "@/common/entity/movieCards";
import { defineProps, PropType } from "vue";
import Cards, { LoadMoreFn } from "./Cards.vue";

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
