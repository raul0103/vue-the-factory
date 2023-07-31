<template>
  <section
    class="search"
    style="
      background-image: url(https://images.unsplash.com/photo-1690382285917-73dfd2a22d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80);
    "
  >
    <form class="search__form" @submit.prevent="search">
      <div class="search__form__container">
        <input
          type="text"
          class="search__form__search-input"
          placeholder="Поиск"
          v-model="form.query"
        />
        <button type="submit">
          <SearchIcon fill="#000" />
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useImage } from "@/composable/image.js";
import { useImageStore } from "@/stores/image.js";
import { getRandomImages } from "@/services/api.js";

import SearchIcon from "@/components/icons/SearchIcon.vue";

const { serialize } = useImage();
const image_store = useImageStore();
const form = reactive({
  query: "",
});

async function search() {
  if (!form.query.length) return;

  const response = await getRandomImages(form);

  if (response && response.type === "success") {
    image_store.setSearchImages(
      response.response.map((image) => serialize(image))
    );
  } else {
    console.log("Ошибка при получении изображений");
  }
}
</script>
