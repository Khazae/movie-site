<template>
  <Index
    :data="data"
    :loadMore="loadFilms"
    :page="pageL"
    :charEnded="charEnded"
    :newItemLoading="newItemLoading"
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

const loadFilms = async (page?: number) => {
  newItemLoading.value = true;
  try {
    const [films] = await fetchAllFilms(page);
    data.value = [...data.value, ...films];
    let ended = false;
    if (films.length < 20) {
      ended = true;
    }

    charEnded.value = ended;
    pageL.value++;
  } catch (e) {
    console.log(e);
  } finally {
    newItemLoading.value = false;
  }
};

onMounted(() => {
  loadFilms();
});
</script>
