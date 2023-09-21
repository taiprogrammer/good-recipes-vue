<template>
    <Header />
    <Topic />
    <Carousel />
    <main>
        <div class="divider"></div>
        <h1>Últimos adicionados</h1>
        <div class="container-loader" v-if="isLoadingRecents">
            <Loader />
        </div>
        <div class="container-recipes" v-else-if="mostRecentsRecipes !== null">
            <div v-for="(recipe, key) in mostRecentsRecipes" :key="key">
                <RecipeCard
                    :imagem-url="recipe.receita.imagem"
                    :nome="recipe.receita.nome"
                    :tempo="`${recipe.receita.horas}:${recipe.receita.minutos == 0 ?
                        '00' : recipe.receita.minutos}:${recipe.receita.segundos == 0 ?
                         '00' : recipe.receita.segundos}`"
                    :porcoes="recipe.receita.porcoes"
                    :id="recipe.receita.receita_id"
                    :quantidade="recipe.favorito.quantidade"
                    :favorite-id="recipe.favoritoId"
                    />
            </div>
        </div>
        <div class="divider"></div>
        <h1>Os favoritinhos</h1>
        <div class="container-loader" v-if="isLoadingFavorites">
            <Loader />
        </div>
        <div class="container-recipes" v-else-if="mostFavoritesRecipes !== null">
            <div v-for="(recipe, key) in mostFavoritesRecipes" :key="key">
                <RecipeCard
                    :imagem-url="recipe.receita.imagem"
                    :nome="recipe.receita.nome"
                    :tempo="`
                    ${recipe.receita.horas}:${recipe.receita.minutos == 0 ?
                    '00' : recipe.receita.minutos}:${recipe.receita.segundos == 0 ?
                    '00' : recipe.receita.segundos}`"
                    :porcoes="recipe.receita.porcoes"
                    :id="recipe.receita.receita_id"
                    :quantidade="recipe.favorito.quantidade"
                    :favorite-id="recipe.favoritoId"
                    />
            </div>
        </div>
    </main>
    <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Topic from '../../components/Topic.vue';
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';
import Loader from '../../components/Loader.vue';
import Carousel from '../../components/Carousel.vue';
import RecipeCard from '../../components/RecipeCard.vue';

import api from '../../services/index';

const router = useRouter();

const isLoadingRecents = ref(true);
const isLoadingFavorites = ref(true);
const mostRecentsRecipes = ref(null);
const mostFavoritesRecipes = ref(null);

async function getMostRecentsRecipes() {
  api.post('/favorite/recents').then(async ({ data }) => {
    if (data.length > 0) {
      mostRecentsRecipes.value = data;

      setTimeout(() => {
        isLoadingRecents.value = false;
      }, 2500);
    }
  }).catch((error) => {
    if (error.response.status === 401) {
      window.localStorage.clear();
      router.push('/login');
    }
  });
}

async function getMostFavoritesRecipes() {
  await api.post('/favorite/most-favorites').then(async ({ data }) => {
    if (data.length > 0) {
      mostFavoritesRecipes.value = data;

      setTimeout(() => {
        isLoadingFavorites.value = false;
      }, 2500);
    }
  }).catch((error) => {
    if (error.response.status === 401) {
      window.localStorage.clear();
      router.push('/login');
    }
  });
}

onMounted(async () => {
  await getMostRecentsRecipes();
  await getMostFavoritesRecipes();
});
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.divider {
    width: 100%;
    height: 0.1rem;

    background: var(--gray200);

    margin-top: 3rem;
}

.container-recipes {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    margin: 1rem 0;
}

.container-loader {
    width: 100%;
    margin: 0 auto;
    padding: 3rem 0;
}

main {
    width: 90%;
    margin: 0 auto;
}

h1 {
    color: var(--green250);
    font-family: 'Anton', sans-serif;

    margin: 1rem;
}
</style>
