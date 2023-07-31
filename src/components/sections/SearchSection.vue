<template>
  <section
    class="search"
    style="
      background-image: url(https://images.unsplash.com/photo-1690382285917-73dfd2a22d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80);
    "
  >
    <form class="search__form" @submit.prevent="search">
      <div class="search__form__container">
        <input
          type="text"
          class="search__form__search-input"
          placeholder="Поиск"
          v-model="form.query"
        />
        <button type="submit">
          <SearchIcon fill="#000" />
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from "vue";

import SearchIcon from "@/components/icons/SearchIcon.vue";

const form = reactive({
  query: "",
});

const search = () => {
  if (form.query.length) console.log(form);
};
</script>
