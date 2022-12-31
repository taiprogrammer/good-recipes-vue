<template>
    <header class="not-logged">
        <div class="container">
            <RouterLink to="/">
                <img src="../../assets/logo-light.png" alt="Logo Good Recipes" />
            </RouterLink>
            <nav v-if="logged">
                <span class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.6" height="17.6" fill="#127369"
                        viewBox="0 0 256 256">
                        <line x1="200" y1="136" x2="248" y2="136" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="224" y1="112" x2="224" y2="160" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <circle cx="108" cy="100" r="60" fill="none" stroke="#127369" stroke-miterlimit="10"
                            stroke-width="16"></circle>
                        <path d="M22.2,200a112,112,0,0,1,171.6,0" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></path>
                    </svg>
                    <ButtonNavigation text="Cadastre - se" path="/" />
                </span>
                <span class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.6" height="17.6" fill="#127369"
                        viewBox="0 0 256 256">
                        <polyline points="94 170 136 128 94 86" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></polyline>
                        <line x1="24" y1="128" x2="136" y2="128" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <path d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" fill="none" stroke="#127369"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                    </svg>
                    <ButtonNavigation text="Entrar" path="/" />
                </span>
            </nav>
            <nav v-else>
                <span class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.6" height="17.6" fill="#127369"
                        viewBox="0 0 256 256">
                        <line x1="96" y1="128" x2="160" y2="128" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <path
                            d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z"
                            fill="none" stroke="#127369" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="16"></path>
                        <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="128" y1="24" x2="128" y2="56" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                    </svg>
                    <ButtonNavigation text="Minhas Receitas" path="/" />
                </span>
                <span class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.6" height="17.6" fill="#127369"
                        viewBox="0 0 256 256">
                        <path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                            fill="none" stroke="#127369" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="16"></path>
                    </svg>
                    <ButtonNavigation text="Meus Favoritos" path="/" />
                </span>
                <span class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.6" height="17.6" fill="#127369"
                        viewBox="0 0 256 256">
                        <circle cx="108" cy="100" r="60" fill="none" stroke="#127369" stroke-miterlimit="10"
                            stroke-width="16"></circle>
                        <path d="M22.2,200a112,112,0,0,1,171.6,0" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></path>
                        <circle cx="220" cy="136" r="16" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></circle>
                        <line x1="220" y1="120" x2="220" y2="108" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="206.1" y1="128" x2="195.8" y2="122" fill="none" stroke="#127369"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="206.1" y1="144" x2="195.8" y2="150" fill="none" stroke="#127369"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="220" y1="152" x2="220" y2="164" fill="none" stroke="#127369" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="233.9" y1="144" x2="244.2" y2="150" fill="none" stroke="#127369"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="233.9" y1="128" x2="244.2" y2="122" fill="none" stroke="#127369"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                    </svg>
                    <ButtonNavigation text="Minha Conta" path="/profile" />
                </span>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import ButtonNavigation from './ButtonNavigation.vue';

const logged = ref(false);

</script>

<style lang="css" scoped>
header {
    padding: 1rem 0;
    background: var(--white);
    border-bottom: 1.8px solid var(--green-750);
}

header img {
    height: 4.5rem;
}

header nav {
    display: flex;
    gap: 1rem;
}

.container {
    width: 90%;
    margin: 0 auto;
}

header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}
</style>