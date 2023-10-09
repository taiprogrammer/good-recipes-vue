<template>
    <Header />
    <Topic />
    <main>
        <div class="container" v-if="loading">
            <div class="skeleton-title"></div>
            <div class="box-recipe">
                <div>
                    <div class="cover"></div>
                    <div>
                        <div class="time"></div>
                    </div>
                </div>
                <div class="container-info">
                    <h2>Ingredientes</h2>
                    <div class="ingredientes-skeleton"></div>
                    <h2>Modo de preparo</h2>
                    <div class="modo-preparo-skeleton"></div>
                </div>
            </div>
        </div>
        <Transition v-else>
            <div class="container">
                <h1>{{ recipe.nome }}</h1>
                <div class="box-recipe">
                    <div class="container-cover">
                        <img v-if="recipe.imagem === null" src="../../assets/no-image/cover.png" alt="Receita sem imagem" />
                        <img v-else :src="`https://good-recipes-api.onrender.com/${recipe.imagem}`" :alt="recipe.nome">
                        <div>
                            <p>
                                <PhTimer />
                                {{ `${recipe.horas}:${recipe.minutos == 0 ?
                                    '00' : recipe.minutos}:${recipe.segundos == 0 ?
                                        '00' : recipe.segundos}` }}
                            </p>
                            <p>
                                <PhForkKnife />
                                {{ recipe.porcoes == 1 ?
                                    `${recipe.porcoes} porção` : `${recipe.porcoes} porções` }}
                            </p>
                        </div>
                    </div>
                    <div class="container-info">
                        <h2>Ingredientes</h2>
                        <div class="ingredientes">
                            <ul v-html="recipe.ingredientes"></ul>
                        </div>
                        <h2>Modo de preparo</h2>
                        <div class="modo-preparo">
                            <ul v-html="recipe.modoPreparo"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </main>
    <Footer />
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { PhForkKnife, PhTimer } from '@phosphor-icons/vue';

import Topic from '../../components/Topic.vue';
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

import api from '../../services/index';

const route = useRoute();
const router = useRouter();

const recipe = ref(null);
const loading = ref(true);

async function getRecipe() {
  await api.get(`/recipe/${route.params.id}`)
    .then(async ({ data }) => {
      if (data) {
        recipe.value = data;
        setTimeout(() => {
          loading.value = false;
        }, 2500);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        window.localStorage.clear();
        router.push('/login');
      }
    });
}

onBeforeMount(() => {
  getRecipe();
});
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

@keyframes loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-title {
    height: 5rem;
    width: 28rem;

    margin: 2.5rem 0;

    border-radius: 0.5rem;

    animation: loading 1s linear infinite alternate;
}

.cover {
    height: 18.75rem;
    width: 21.875rem;

    border-radius: 0.5rem;

    animation: loading 1s linear infinite alternate;
}

.time {
    height: 30px;
    width: 30%;

    margin: 0.5rem;

    border-radius: 0.5rem;

    animation: loading 1s linear infinite alternate;
}

.ingredientes-skeleton, .modo-preparo-skeleton {
    height: 300px;
    width: 40%;

    border-radius: 0.5rem;

    animation: loading 1s linear infinite alternate;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

@media (min-width: 300px) and (max-width: 640px) {
    .box-recipe {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (min-width: 640px) and (max-width: 768px) {
    .box-recipe {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .box-recipe {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
