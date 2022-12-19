<script setup>
import Home from './views/Home.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <!-- <RouterLink to="/profile">Profile</RouterLink>
  <RouterLink to="/">Home</RouterLink> -->
  <RouterView />
</template>

<style scoped>

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
