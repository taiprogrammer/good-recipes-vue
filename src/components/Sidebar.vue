<template>
    <nav>
        <header>
            <PhUserCircleGear size="40" />
            <h3>Nome do usuário</h3>
        </header>
        <div class="options">
            <RouterLink to="/my-favorites/1">
                <PhHeart />
                <span>Meus favoritos</span>
            </RouterLink>
            <RouterLink to="/new-recipe">
                <PhNotepad />
                <span>Envie sua receita</span>
            </RouterLink>
            <RouterLink to="/my-recipes/1">
                <PhFolderNotchOpen />
                <span>Minhas receitas</span>
            </RouterLink>
            <RouterLink to="/my-profile/1">
                <PhClipboardText />
                <span>Meus dados</span>
            </RouterLink>
            <a @click="logout">
                <PhSignOut />
                <span>Sair</span>
            </a>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { PhUserCircleGear, PhHeart, PhNotepad, PhFolderNotchOpen, PhClipboardText, PhSignOut } from '@phosphor-icons/vue';

const router = useRouter();

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.push("/");
}
</script>

<style lang="css" scoped>
nav {
    padding: 2rem;
    width: fit-content;
    height: fit-content;
    background: var(--gray090);

    gap: 2rem;
    display: flex;
    border-radius: 0.5rem;
    flex-direction: column;
}

header {
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    border-bottom: 0.8px solid var(--gray200);
}

h3 {
    font-weight: 500;
    font-size: 1.75rem;
    color: var(--gray650);
    padding-bottom: 0.5rem;

    text-align: center;
}

.options {
    gap: 2rem;
    display: flex;
    flex-direction: column;
}

.router-link-active {
    color: var(--green450);
}

a {
    cursor: pointer;
    padding: 1rem 0.5rem;
    text-decoration: none;
    color: var(--green400);
    
    gap: 0.5rem;
    display: flex;
    align-items: center;

    transition: all 0.2s ease-in-out;
}

a:hover {
    color: var(--green450);
}
</style>