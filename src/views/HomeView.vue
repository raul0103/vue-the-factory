<template>
  <SearchSection />

  <ImageListSection :items="images" />
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { getRandomImages } from "@/services/api.js";
import { serialize } from "@/utils/image.js";

import ImageListSection from "@/components/sections/ImageListSection.vue";
import SearchSection from "@/components/sections/SearchSection.vue";

let images = ref(null);

onMounted(() => {
  getImages();
});

/** Через service api получаем рандомные изображения */
async function getImages() {
  const response = await getRandomImages();

  if (response.type === "success") {
    images.value = response.response.map((image) => serialize(image));
    console.log(response.response, images.value);
  } else {
    console.log("Ошибка при получении изображений");
  }
}
</script>
