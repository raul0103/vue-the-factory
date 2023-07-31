<template>
  <section class="image-list">
    <div class="container">
      <div class="image-list__row">
        <div
          :style="`background-image:url(${item.src})`"
          class="image-list__item"
          v-for="item in items"
          :key="item.src"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>
