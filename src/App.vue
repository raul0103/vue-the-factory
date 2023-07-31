<template>
  <component :is="route.meta.layout"></component>
</template>

<script setup>
import { useRoute } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";

const route = useRoute();
</script>
