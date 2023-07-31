import { ref } from "vue";
import { defineStore } from "pinia";

export const useImageStore = defineStore("image", () => {
  let full_image_url = ref(null); // Путь к изображению для отображения в модальном окне
  let search_images = ref(null);

  function getSearchImages() {
    return search_images.value;
  }

  function clearSearchImages() {
    search_images.value = null;
  }

  function setSearchImages(images) {
    search_images.value = images;
  }

  function getFullImage() {
    return full_image_url.value;
  }

  function setFullImage(url) {
    full_image_url.value = url;
  }

  return {
    getSearchImages,
    clearSearchImages,
    setSearchImages,
    getFullImage,
    setFullImage,
  };
});
