<template>
    <div class="wrapper">
        <div class="container">
            <div class="container-cover">
                <img v-if="imagemUrl === null" src="../assets/no-image/cover.png" alt="Receita sem imagem">
                <img v-else :src="`http://localhost:8080/${imagemUrl}`" :alt="nome">
            </div>

            <PhHeart v-if="!isFavorite" class="favorite-blank" size="30" weight="regular" @click="createFavorite" />
            <PhHeart v-else class="favorite-blank" size="30" weight="fill" @click="removeFavorite" />

            <div class="info-container">
                <h2>{{ nome }}</h2>
                <div class="info">
                    <p>
                        <PhTimer />
                        <span>{{ tempo }}</span>
                    </p>
                    <p>
                        <PhForkKnife />
                        <span>{{ porcoes <= 1 ? `${porcoes} porção` : `${porcoes} porções` }}</span>
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
import { api } from '../services';
import { onBeforeMount, ref } from 'vue';
import { PhHeart, PhTimer, PhForkKnife, PhEye } from '@phosphor-icons/vue'

const props = defineProps({
    nome: String,
    imagemUrl: String,
    tempo: String,
    porcoes: Number,
    id: Number,
    quantidade: Number,
    favoriteId: Number
})

const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')) : null;
const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null;

const userFavorites = ref(null);
const isFavorite = ref(false);

async function verifyFavorites() {
    if (userFavorites.value !== null) {
        userFavorites.value.map((favorite) => {
            if (favorite.receita_id === props.id) {
                isFavorite.value = true;
            }
        })
    }
}

async function getUserLoggedFavorites() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')) : null;
    const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null;

    if (userId !== null) {
        await api.get(`/favorite/${userId}`, {
            headers: {
                "x-access-token": token
            }
        }).then(async ({ data }) => {
            userFavorites.value = await data;
        }).catch((error) => {
            console.log(error);
        })
    }
}

async function createFavorite() {
    const paylod = {
        favoritoId: props.favoriteId,
        usuarioId: userId
    }

    if (isFavorite.value === false) {
        await api.post(`/favorite`, paylod, {
            headers: {
                "x-access-token": token
            }
        }).then(async ({ data }) => {
            await api.put(`/favorite/${props.favoriteId}`, {
                quantidade: props.quantidade + 1
            }, {
                headers: {
                    "x-access-token": token
                }
            }).then(async ({ data }) => {
                isFavorite.value = true
            }).catch((error) => console.log(error))

        }).catch((error) => {
            console.log(error);
        })
    }
}

async function removeFavorite() {
    if (isFavorite.value === true) {
        await api.delete(`/favorite/${props.favoriteId}`, {
            headers: {
                "x-access-token": token
            }
        }).then(async ({ data }) => {
            await api.put(`/favorite/${props.favoriteId}`, {
                quantidade: Number(props.quantidade - 1)
            }, {
                headers: {
                    "x-access-token": token
                }
            }).then(async ({ data }) => {
                isFavorite.value = false
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        })
    }
}

onBeforeMount(async () => {
    await getUserLoggedFavorites();
    await verifyFavorites();
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

.container-cover {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    height: 300px;
    max-width: 295px;
    object-fit: cover;
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