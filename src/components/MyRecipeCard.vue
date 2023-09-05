<template>
    <div class="wrapper">
        <img v-if="imagem === null" src="../assets/no-image/cover.png" alt="Receita sem imagem">
        <img v-else :src="`http://localhost:8080/${imagem}`" :alt="nome">
        <div class="info">
            <p>{{ nome }}</p>
            <div class="icon-desc">
                <PhTimer />
                <span>{{ tempo }}</span>
            </div>
            <div class="icon-desc">
                <PhForkKnife />
                <span>{{ porcoes }}</span>
            </div>
            <div class="icon-desc">
                <PhEye />
                <RouterLink :to="`/recipe/${id}`">Visualizar</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { PhEye, PhTimer, PhForkKnife } from '@phosphor-icons/vue';

defineProps({
    imagem: String,
    nome: String,
    tempo: String,
    porcoes: String,
    id: Number
})

</script>

<style lang="css" scoped>
.wrapper {
    width: 100%;
    height: fit-content;
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);

    border-radius: 10px;

    transform: scale(0.95);
    transition: box-shaddow 0.5s, transform 0.5s;
}

.wrapper:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
}

.info {
    padding: 1rem;
}

img {
    width: inherit;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

p {
    color: var(--green250);
    font-weight: bold;

    padding: 0.5rem 0;
}

span {
    color: var(--textLight);
}

.icon-desc {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

a {
    text-decoration: none;
    color: var(--green400);
    transition: all 0.3s ease-in-out;

    padding: 0.5rem 0;
}

a:hover {
    color: var(--green300);
}
</style>