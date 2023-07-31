<template>
  <a @click="link" class="link">
    <slot></slot>
  </a>
</template>

<script setup>
import { useLink } from "@/composable/link";

const props = defineProps({
  to: {
    type: String,
    required: true,
    default: "/",
  },
});

const { link } = useLink(props);
</script>
