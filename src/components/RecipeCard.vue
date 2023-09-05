<template>
    <div class="wrapper">
        <div class="container">
            <img v-if="imagemUrl === null" src="../assets/no-image/cover.png" alt="Receita sem imagem">
            <img v-else :src="`http://localhost:8080/${imagemUrl}`" :alt="nome">

            <PhHeart class="favorite-blank" />

            <div class="info-container">
                <h2>{{ nome }}</h2>
                <div class="info">
                    <p>
                        <PhTimer />
                        <span>{{ tempo }}</span>
                    </p>
                    <p>
                        <PhForkKnife />
                        <span>{{ porcoes }} porção</span>
                    </p>
                    <p>
                        <PhEye />
                        <span>
                            <RouterLink :to="`/recipe/${id}`">Ver mais</RouterLink>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { PhHeart, PhTimer, PhForkKnife, PhEye } from '@phosphor-icons/vue'

const props = defineProps({
    nome: String,
    imagemUrl: String,
    tempo: String,
    porcoes: Number,
    id: Number
})
</script>

<style lang="css" scoped>
.wrapper {
    cursor: pointer;
    background: var(--white);
    border-radius: 10px;

    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);

    margin: auto;
    overflow: hidden;
    position: relative;

    transform: scale(0.95);
    transition: box-shaddow 0.5s, transform 0.5s;
}

.wrapper:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
}

.container {
    width: 100%;
    height: 100%;
}

img {
    height: 300px;
    max-width: 295px;
}

svg.favorite-blank {
    position: absolute;
    right: 0.5rem;
    bottom: 1rem;

    padding: 0.5rem;
    color: var(--red500);

    transform: scale(0.95);
    transition: transform 0.5s;
}

svg.favorite-blank:hover {
    transform: scale(2);
}

.info-container {
    padding: 1rem;
}

h2 {
    color: var(--green250);
}

.info {
    margin-top: 0.5rem;

    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    color: var(--textLight);
}

p {
    display: flex;
    align-items: center;
}

span {
    margin-left: 0.5rem;
}

a {
    text-decoration: none;
    color: var(--green400);
    transition: all 0.3s ease-in-out;
}

a:hover {
    color: var(--green300);
}
</style>