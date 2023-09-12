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
                        :id="recipe.receita_id" 
                        :imagem-url="recipe.imagem" 
                        :nome="recipe.nome"
                        :tempo="`${recipe.horas}:${recipe.minutos == 0 ? '00' : recipe.minutos}:${recipe.segundos == 0 ? '00' : recipe.segundos}`"
                        :porcoes="recipe.porcoes" 
                    />
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
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Loader from '../../components/Loader.vue';
import Sidebar from '../../components/Sidebar.vue';
import MyRecipeCard from '../../components/MyRecipeCard.vue';

import { api } from '../../services';
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
import RecipeCard from '../../components/RecipeCard.vue';

const route = useRoute();

const recipes = ref(null);
const isLoading = ref(true);

async function getMyRecipes() {
    const id = route.params.id;
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')) : null;
    await api.get(`/recipe/${id}/my-recipes`, {
        headers: {
            "x-access-token": token
        }
    }).then(async ({ data }) => {
        recipes.value = await data

        setTimeout(() => {
            isLoading.value = false;
        }, 1500)

    }).catch((error) => {
        console.log(error);
    })
}

onBeforeMount(() => {
    getMyRecipes()
})
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
</style>