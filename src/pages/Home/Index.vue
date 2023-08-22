<template>
    <Header />
    <Topic />
    <Carousel />
    <main>
        <div class="divider"></div>
        <h1>Últimos adicionados</h1>
        <div class="container-recipes">
            <RecipeCard :imagem-url="null" nome="Receita 1" tempo="1:20:30" :porcoes="2" />
            <RecipeCard :imagem-url="null" nome="Receita 2" tempo="1:20:30" :porcoes="4" />
            <RecipeCard :imagem-url="null" nome="Receita 3" tempo="1:20:30" :porcoes="6" />
            <RecipeCard :imagem-url="null" nome="Receita 4" tempo="1:20:30" :porcoes="8" />
            <RecipeCard :imagem-url="null" nome="Receita 5" tempo="1:20:30" :porcoes="10" />
        </div>
        <div class="divider"></div>
        <h1>Os mais acessados</h1>
        <div class="container-recipes">
            <RecipeCard :imagem-url="null" nome="Receita 1" tempo="1:20:30" :porcoes="2" />
            <RecipeCard :imagem-url="null" nome="Receita 2" tempo="1:20:30" :porcoes="4" />
            <RecipeCard :imagem-url="null" nome="Receita 3" tempo="1:20:30" :porcoes="6" />
            <RecipeCard :imagem-url="null" nome="Receita 4" tempo="1:20:30" :porcoes="8" />
            <RecipeCard :imagem-url="null" nome="Receita 5" tempo="1:20:30" :porcoes="10" />
        </div>
    </main>
    <Footer />
</template>

<script setup>
import Header from '../../components/Header.vue';
import Topic from '../../components/Topic.vue';
import Carousel from '../../components/Carousel.vue';
import RecipeCard from '../../components/RecipeCard.vue';
import Footer from '../../components/Footer.vue';
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