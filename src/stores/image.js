import { ref } from "vue";
import { defineStore } from "pinia";

export const useImageStore = defineStore("image", () => {
  let full_image_url = ref(null); // Путь к изображению для отображения в модальном окне

  function getFullImage() {
    return full_image_url.value;
  }

  function setFullImage(url) {
    full_image_url.value = url;
  }

  return { getFullImage, setFullImage };
});
