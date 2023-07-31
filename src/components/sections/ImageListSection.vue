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
            :style="`background-image:url(${item.urls.small})`"
            class="image-list__item"
          ></div>
          <button @click="setFavorite(item)" class="image-list__btn-favorite">
            <HeartIcon :active="checkFavoriteById(item.id)" />
          </button>
          <button
            @click="openFullImage(item.urls.full)"
            class="image-list__btn-full"
          >
            <FullIcon />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useImageStore } from "@/stores/image.js";
import { useFullBoxStore } from "@/stores/full-box.js";
import { useFavorite } from "@/composable/favorite.js";
import FullIcon from "@/components/icons/FullIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";

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

const { setFavorite, checkFavoriteById } = useFavorite();
</script>
