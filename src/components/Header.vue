<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <div class="header__logo">
          <EmptyLink to="/">
            <img src="@/assets/images/logo.svg" alt="Logo" />
          </EmptyLink>
        </div>
        <div class="header__controls">
          <header-link to="/" :hide_active="true">
            <template #icon>
              <SearchIcon />
            </template>
            <template #default>Поиск</template></header-link
          >
          <header-link to="/favorites">
            <template #icon>
              <HeartIcon />
            </template>
            <template #default>Избранное</template></header-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import HeartIcon from "@/components/icons/HeartIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import HeaderLink from "@/components/links/HeaderLink.vue";
import EmptyLink from "@/components/links/EmptyLink.vue";
</script>
