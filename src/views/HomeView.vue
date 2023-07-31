<template>
  <SearchSection />

  <ImageListSection :items="search_images || images" />
</template>

<script setup>
import { ref, computed } from "vue";
import { onMounted } from "vue";
import { getRandomImages } from "@/services/api.js";
import { useImage } from "@/composable/image.js";
import { useImageStore } from "@/stores/image.js";

import ImageListSection from "@/components/sections/ImageListSection.vue";
import SearchSection from "@/components/sections/SearchSection.vue";

const { serialize } = useImage();
const image_store = useImageStore();

let images = ref([]);

onMounted(() => {
  random();
});

image_store.clearSearchImages(); // Очищаю так как после переключения между роутами данные остаются
const search_images = computed(() => {
  return image_store.getSearchImages();
});

/** Через service api получаем рандомные изображения */
async function random() {
  const response = await getRandomImages();

  if (response && response.type === "success") {
    images.value = response.response.map((image) => serialize(image));
  } else {
    console.log("Ошибка при получении изображений");
  }
}
</script>
