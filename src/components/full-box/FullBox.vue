<!-- Окно с выводом полноразмерной картинки -->
<!-- Компонент вызывается один раз в App.vue -->
<template>
  <div
    class="full-box"
    v-if="full_box_store.getStatus()"
    @click="full_box_store.close()"
  >
    <img
      :src="image_store.getFullImage()"
      class="full-box__image"
      @click.stop
    />
    <button class="full-box__btn-close" @click="full_box_store.close()">
      &#10006;
    </button>
  </div>
</template>

<script setup>
import { useFullBoxStore } from "@/stores/full-box.js";
import { useImageStore } from "@/stores/image.js";

const full_box_store = useFullBoxStore();
const image_store = useImageStore();
</script>
