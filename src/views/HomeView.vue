<template>
  <section class="search">
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
