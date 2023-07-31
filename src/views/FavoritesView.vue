<template>
  <ImageListSection :items="getFavorites()" />
</template>

<script setup>
import ImageListSection from "@/components/sections/ImageListSection.vue";
import { useFavorite } from "@/composable/favorite.js";

const { getFavorites } = useFavorite();
</script>
