<template>
  <a
    v-if="!hideActive()"
    @click="link"
    :class="[
      'header__link',
      'link',
      {
        active: isActive,
      },
    ]"
  >
    <div class="header__link-icon">
      <slot name="icon"></slot>
    </div>
    <div class="header__link-title">
      <slot></slot>
    </div>
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
  hide_active: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const { link, isActive, hideActive } = useLink(props);
</script>
