<template>
    <Header />
    <main>
        <Sidebar />
        <div class="no-recipe-container" v-if="isLoading">
            <Loader />
        </div>
        <template v-else>
            <div class="container" v-if="recipes.length > 0">
                <div v-for="(recipe, key) in recipes" :key="key">
                    <RecipeCard
                        :id="recipe.receita.receita_id"
                        :imagem-url="recipe.receita.imagem"
                        :nome="recipe.receita.nome"
                        :tempo="`${recipe.receita.horas}:${recipe.receita.minutos == 0 ?
                             '00' : recipe.receita.minutos}:${recipe.receita.segundos == 0 ?
                              '00' : recipe.segundos}`"
                        :porcoes="recipe.receita.porcoes"
                        :favorite-id="recipe.favorito_id"
                        :quantidade="recipe.quantidade" />
                </div>
            </div>
            <div class="no-recipe-container" v-else>
                <h2>Ops! Você não possui nenhuma receita cadastrada :(</h2>
            </div>
        </template>
    </main>
    <Footer />
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Loader from '../../components/Loader.vue';
import Sidebar from '../../components/Sidebar.vue';
import RecipeCard from '../../components/RecipeCard.vue';

import api from '../../services/index';

const route = useRoute();
const router = useRouter();

const recipes = ref(null);
const isLoading = ref(true);

async function getMyRecipes() {
  const { id } = route.params;
  const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')) : null;
  await api.get(`/recipe/${id}/my-recipes`, {
    headers: {
      'x-access-token': token,
    },
  }).then(async ({ data }) => {
    recipes.value = await data;

    setTimeout(() => {
      isLoading.value = false;
    }, 1500);
  }).catch((error) => {
    if (error.response.status === 401) {
      window.localStorage.clear();
      router.push('/login');
    }
  });
}

onBeforeMount(() => {
  getMyRecipes();
});
</script>

<style lang="css" scoped>
main {
    width: 90%;
    margin: 3rem auto;

    gap: 4rem;
    display: flex;
}

.container {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    height: 800px;
    width: 96%;
    max-height: 800px;

    overflow-y: auto;

    padding: 0 2rem;
}

.no-recipe-container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    color: var(--textMedium);
}

@media (min-width: 300px) and (max-width: 640px) {
  main {
    flex-direction: column;
  }

  .container {
    grid-template-columns: repeat(1, 1fr);
    width: 85%;
  }
}

@media (min-width: 640px) and (max-width: 768px) {
  main {
    flex-direction: column;
  }

  .container {
    grid-template-columns: repeat(1, 1fr);
    width: 85%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
