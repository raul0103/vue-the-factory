import { useImageStore } from "@/stores/image.js";
import { useFullBoxStore } from "@/stores/full-box.js";

export function useImage() {
  const image_store = useImageStore();
  const full_box_store = useFullBoxStore();

  function openFullImage(url) {
    image_store.setFullImage(url);
    full_box_store.open();
  }

  return {
    openFullImage,
  };
}
