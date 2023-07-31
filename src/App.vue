<template>
  <component :is="route.meta.layout"></component>
  <FullBox />
</template>

<script setup>
import { useRoute } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import FullBox from "@/components/full-box/FullBox.vue";

const route = useRoute();
</script>
