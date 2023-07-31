<template>
  <section class="image-list">
    <div class="container">
      <div class="image-list__row">
        <div
          @click="image_store.setFullImage(item.urls.full)"
          :style="`background-image:url(${item.urls.small})`"
          class="image-list__item"
          v-for="item in items"
          :key="item.id"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useImageStore } from "@/stores/image.js";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: [],
  },
});

const image_store = useImageStore();
</script>
