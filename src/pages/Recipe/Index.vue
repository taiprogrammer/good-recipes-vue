<template>
    <Header />
    <Topic />
    <main>
        <div class="container">
            <h1>{{ recipe.nome }}</h1>
            <div class="box-recipe">
                <div class="container-cover">
                    <img v-if="recipe.imagem === null" src="../../assets/no-image/cover.png" alt="Receita sem imagem">
                    <img v-else :src="`http://localhost:8080/${recipe.imagem}`" :alt="recipe.nome">
                    <div>
                        <p>
                            <PhTimer />
                            {{ `${recipe.horas}:${recipe.minutos == 0 ? '00' :
                                recipe.minutos}:${recipe.segundos == 0 ? '00' : recipe.segundos}` }}
                        </p>
                        <p>
                            <PhForkKnife />
                            {{ recipe.porcoes == 1 ? `${recipe.porcoes} porção` : `${recipe.porcoes} porções` }}
                        </p>
                    </div>
                </div>
                <div class="container-info">
                    <h2>Ingredientes</h2>
                    <div class="ingredientes">
                        {{ recipe.ingredientes }}
                    </div>
                    <h2>Modo de preparo</h2>
                    <div class="modo-preparo">
                        {{ recipe.modoPreparo }}
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>

<script setup>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Topic from '../../components/Topic.vue';

import { api } from '../../services';
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
import { PhForkKnife, PhTimer } from '@phosphor-icons/vue';

const route = useRoute();

const recipe = ref(null);

async function getRecipe() {
    await api.get(`/recipe/${route.params.id}`)
        .then(async ({ data }) => {
            if (data) {
                recipe.value = await data;
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

onBeforeMount(() => {
    getRecipe();
})
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.container {
    width: 90%;
    margin: 0 auto;
}

h1 {
    font-size: 3.5rem;
    font-family: 'Anton', sans-serif;

    color: var(--green250);

    margin: 2.5rem 0;
}

h2 {
    font-size: 2.5rem;
    font-family: 'Anton', sans-serif;

    color: var(--green300);

    margin-bottom: 2.5rem;
}

main {
    margin-bottom: 5rem;
}

p {
    color: var(--green300);
    text-decoration: none;

    gap: 0.3rem;
    display: flex;
    align-items: center;
}

.container-cover {
    width: fit-content;
}

.container-cover img {
    margin: 0 auto;
    height: 350px;

    max-width: 370px;
}

.container-cover div {
    gap: 0.5rem;
    display: flex;
    justify-content: center;

    padding: 0.5rem 0;
}

.ingredientes,
.modo-preparo {
    width: 40%;
}

.box-recipe {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
</style>