<template>
  <div class="favorites">
    <h1 class="page-title">Избранное</h1>
    <ImageListSection :items="getFavorites()" />
  </div>
</template>

<script setup>
import ImageListSection from "@/components/sections/ImageListSection.vue";
import { useFavorite } from "@/composable/favorite.js";

const { getFavorites } = useFavorite();
</script>
