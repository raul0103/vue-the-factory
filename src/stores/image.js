import { ref } from "vue";
import { defineStore } from "pinia";

export const useImageStore = defineStore("image", () => {
  let full_image = ref(null);

  function getFullImage() {
    return full_image.value;
  }

  function setFullImage(url) {
    full_image.value = url;
  }

  return { getFullImage, setFullImage };
});
