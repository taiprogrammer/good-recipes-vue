<template>
    <Header />
    <main>
        <Sidebar />
        <div class="no-recipe-container" v-if="isLoading">
            <Loader />
        </div>
        <template v-else>
            <div class="container" v-if="myFavorites.length > 0">
                <div v-for="(recipe, key) in myFavorites" :key="key">
                    <MyRecipeCard 
                    :id="recipe.receita_id"
                    :imagem="recipe.imagem"
                    :tempo="`${recipe.horas}:${recipe.minutos == 0 ? '00' : recipe.minutos}:${recipe.segundos == 0 ? '00' : recipe.segundos}`"
                    :porcoes="recipe.porcoes <= 1 ? `${recipe.porcoes} porção` : `${recipe.porcoes} porções`"/>
                </div>
        </div>
        </template>
    </main>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { api } from '../../services';
import { useRoute } from 'vue-router';

import Header from '../../components/Header.vue';
import Loader from '../../components/Loader.vue';
import Sidebar from '../../components/Sidebar.vue';
import MyRecipeCard from '../../components/MyRecipeCard.vue';

const route = useRoute();

const isLoading = ref(true);
const myFavorites = ref(null);

async function getMyFavorites() {
    const id = route.params.id;
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')) : null;

    await api.get(`/favorite/${id}`, {
        headers: {
            "x-access-token": token
        }
    }).then(async ({ data }) => {
        if (data.length > 0) {
            myFavorites.value = data;

            setTimeout(() => {
                isLoading.value = false;
            }, 1500)
        }
    }).catch((error) => {
        console.log(error);
    })
}

onBeforeMount(async () => {
    await getMyFavorites();
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
    grid-template-columns: repeat(5, 1fr);

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