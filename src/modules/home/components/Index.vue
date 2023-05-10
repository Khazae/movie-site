<template>
  <template v-if="loading && !newItemLoading"><Loader /></template>
  <template v-else-if="error && !loading"
    ><h2>{{ error }}</h2></template
  >
  <template v-else-if="props.data?.length === 0 && !loading && !error">
    <h2>Нет данных</h2>
  </template>
  <template v-else-if="!loading && !error">
    <Cards
      :data="props.data"
      :loadMore="props.loadMore"
      :page="props.page"
      :charEnded="props.charEnded"
      :newItemLoading="props.newItemLoading"
    />
    <div class="loader">
      <Button
        :charEnded="props.charEnded"
        :page="props.page"
        :loading="props.newItemLoading"
        :onClick="props.loadMore"
        >Load more</Button
      >
    </div>
  </template>
</template>

<script lang="ts" setup>
import { MovieCardsProps } from "@/common/entity/movieCards";
import { defineProps, PropType } from "vue";
import Cards, { LoadMoreFn } from "./Cards.vue";
import Loader from "@/common/components/Loader.vue";
import Button from "@/common/components/Button.vue";

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
  loading: {
    type: Boolean,
    required: false,
  },
  error: {
    type: String || null,
    required: false,
  },
});
</script>

<style scoped>
.loader {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
}
</style>
