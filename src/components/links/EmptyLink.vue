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
  blank: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const { link } = useLink(props);
</script>
