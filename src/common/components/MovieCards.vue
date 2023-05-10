<template>
  <template v-if="data && data.length">
    <div v-for="(item, index) in data" :key="item.id" class="item">
      <v-card class="mx-auto" max-width="300" style="width: 100%">
        <v-img
          :src="item.poster"
          :alt="item.title"
          height="300px"
          cover
        ></v-img>

        <v-card-title>{{ item.title }} </v-card-title>

        <v-card-subtitle>{{ item.rating }}</v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text">More</v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="showF(index)"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show[index]">
            <v-divider></v-divider>

            <v-card-text>Original title: {{ item.originalTitle }}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { ref, defineProps, PropType, toRefs } from "vue";
import { MovieCardsProps } from "@/common/entity/movieCards";

// Props
const props = defineProps({
  data: {
    type: Array as PropType<MovieCardsProps[]>,
  },
});

// State
const show = ref<{ [key: string]: boolean }>({});
const { data } = toRefs(props);

const showF = (title: number) => {
  show.value[title] = !show.value[title];
  console.log(show.value);
};
</script>

<style scoped>
.item {
  width: 30%;
  min-width: 200px;
}

.nameOrig {
  font-size: 14px;
  color: grey;
}
</style>
