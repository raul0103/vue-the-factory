<template>
  <section class="image-list">
    <div class="container">
      <div class="image-list__row">
        <div
          class="image-list__item-container"
          v-for="item in items"
          :key="item.id"
        >
          <div
            @click="openFullImage(item.urls.full)"
            :style="`background-image:url(${item.urls.small})`"
            class="image-list__item"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useImageStore } from "@/stores/image.js";
import { useFullBoxStore } from "@/stores/full-box.js";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: [],
  },
});

const image_store = useImageStore();
const full_box_store = useFullBoxStore();

function openFullImage(url) {
  image_store.setFullImage(url);
  full_box_store.open();
}
</script>
