<template>
  <div class="container">
    <component :is="route.meta.layout"></component>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";

const route = useRoute();
</script>
