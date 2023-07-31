<template>
  <section class="image-list" v-if="items.length">
    <div class="container">
      <div class="image-list__row">
        <div
          class="image-list__item-container"
          v-for="item in items"
          :key="item.id"
        >
          <EmptyLink :to="`/image/${item.id}`" :blank="true">
            <div
              :style="`background-image:url(${item.urls.small})`"
              class="image-list__item"
            ></div>
          </EmptyLink>
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
import { useFavorite } from "@/composable/favorite.js";
import { useImage } from "@/composable/image.js";
import FullIcon from "@/components/icons/FullIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import EmptyLink from "@/components/links/EmptyLink.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: [],
  },
});

const { setFavorite, checkFavoriteById } = useFavorite();
const { openFullImage } = useImage();
</script>
