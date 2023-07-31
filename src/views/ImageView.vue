<template>
  <div class="image-view" v-if="image">
    <div
      class="image-view__bg-image"
      :style="`background-image:url(${image.urls.regular})`"
    ></div>

    <div class="container">
      <div class="image-view__header">
        <div class="image-view__header__user">
          <img
            class="image-view__header__user-image"
            :src="image.user.profile_image.medium"
          />
          <div class="image-view__header__user-info">
            <div class="image-view__header__user-name">
              {{ image.user.name }}
            </div>
            <div
              class="image-view__header__user-login"
              v-if="image.user.instagram_username"
            >
              @{{ image.user.instagram_username }}
            </div>
          </div>
        </div>

        <div class="image-view__header__controls">
          <button
            class="image-view__header__btn-favorite"
            @click="setFavorite(image)"
          >
            <HeartIcon fill="#000" :active="checkFavoriteById(image.id)" />
          </button>
          <a
            class="image-view__header__btn-download"
            target="_blank"
            download
            :href="image.links.download + '&force=true'"
          >
            <DownloadIcon />
            <span class="image-view__header__btn-title">Download</span>
          </a>
        </div>
      </div>
      <div class="image-view__main-image">
        <img :src="image.urls.regular" />
        <button
          @click="openFullImage(image.urls.full)"
          class="image-view__main-image__btn-full"
        >
          <FullIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useFavorite } from "@/composable/favorite.js";
import { useImage } from "@/composable/image.js";
import { getImageById } from "@/services/api.js";

import FullIcon from "@/components/icons/FullIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";

const { setFavorite, checkFavoriteById } = useFavorite();
const { openFullImage, serialize } = useImage();

const route = useRoute();
let image = ref(null);

onMounted(() => {
  getImage();
});

async function getImage() {
  const response = await getImageById(route.params.id);

  if (response && response.type === "success") {
    image.value = serialize(response.response);
  } else {
    console.log("Ошибка при получении изображения");
  }
}
</script>
