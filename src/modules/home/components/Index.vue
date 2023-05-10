<template>
  <Cards :data="props.data" />
</template>

<script lang="ts" setup>
import { MovieCardsProps } from "@/common/entity/movieCards";
import { defineProps, PropType } from "vue";
import Cards from "./Cards.vue";

const props = defineProps({
  data: {
    type: Array as PropType<MovieCardsProps[]>,
  },
});
</script>
