<template>
  <header>
    <div class="container">
      <RouterLink to="/">
        <img
          src="../assets/logo-light.png"
          alt="Good Recipes Logo"
        >
      </RouterLink>
      <nav v-if="!logged">
        <RouterLink to="/signup">
          <PhUserPlus />
          <span>Cadastre - se</span>
        </RouterLink>
        <RouterLink to="/login">
          <PhSignIn />
          <span>Entrar</span>
        </RouterLink>
      </nav>
      <nav v-else>
        <RouterLink :to="`/my-recipes/${userId}`">
          <PhNotepad />
          <span>Minhas receitas</span>
        </RouterLink>
        <RouterLink :to="`/my-favorites/${userId}`">
          <PhHeart />
          <span>Meus favoritos</span>
        </RouterLink>
        <RouterLink :to="`/my-profile/${userId}`">
          <PhUserGear />
          <span>Minha conta</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { PhUserPlus, PhSignIn, PhNotepad, PhHeart, PhUserGear } from '@phosphor-icons/vue'

const logged = window.localStorage.token ? true : false;
const userId = window.localStorage.userId ? JSON.parse(window.localStorage.userId) : null;
</script>

<style lang="css" scoped>
.container {
    width: 90%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

header {
    padding: 1rem 0;
    background: var(--white);
    border-bottom: 1.8px solid var(--green750);
}

img {
    height: 4.5rem;
}

nav {
    gap: 1rem;
    display: flex;
}

a {
    color: var(--green400);
    text-decoration: none;

    gap: 0.5rem;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
}

a:hover {
    color: var(--green350);
}

i,
span {
    font-size: 1.1rem;
}
</style>