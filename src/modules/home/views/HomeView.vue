<template>
  <Index
    :data="data"
    :loadMore="loadFilms"
    :page="pageL"
    :charEnded="charEnded"
    :newItemLoading="newItemLoading"
    :loading="loading"
    :error="error"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Index from "../components/Index.vue";
import { MovieCardsProps } from "@/common/entity/movieCards";
import { fetchAllFilms } from "@/api/modules/films/requests/fetchAllFilms";

const data = ref([] as MovieCardsProps[]);
const newItemLoading = ref<boolean>(false);
const pageL = ref<number>(1);
const charEnded = ref<boolean>(false);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const loadFilms = async (page?: number, initial?: boolean) => {
  newItemLoading.value = initial ? false : true;

  error.value = null;
  try {
    const [films] = await fetchAllFilms(page);
    data.value = [...data.value, ...films];
    const ended = films.length < 20; // use const instead of let
    charEnded.value = ended;
    pageL.value++;
  } catch (e: any) {
    error.value = e?.response?.data?.message ?? null;
  } finally {
    newItemLoading.value = false;
    loading.value = false;
  }
};

onMounted(() => {
  loadFilms(pageL.value, true);
});
</script>
