<template>
    <div class="wrapper">
        <header>
            <div class="info_street">
                <PhHouse size="20" />
                <p>Rua lorem isum, 60</p>
            </div>
            <div class="options">
                <button>
                    <PhTrash size="20" />
                </button>
                <button>
                    <PhPencil size="20" />
                </button>
            </div>
        </header>
        <div class="content">
            <p>CEP 08967567 - São Paulo, Brasil</p>
            <p>Usuario x</p>
        </div>
        <footer>
            <button>
                <span>Adicionar endereço</span>
                <PhArrowRight size="20" />
            </button>

        </footer>
    </div>
</template>

<script setup>

import { PhArrowRight, PhHouse, PhPencil, PhTrash } from '@phosphor-icons/vue';
</script>

<style lang="css" scoped>
.wrapper {
    width: 90%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--gray300);
}

.wrapper + .wrapper {
    margin-top: 1rem;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.info_street {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    color: var(--textMedium);
}

.options {
    gap: 0.5rem;
    display: flex;
    align-items: center;
}

.options button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.3rem;

    border: 0;
    cursor: pointer;
    background: none;
}

button svg {
    color: var(--green250);

    transition: all .3s ease-in-out;
}

button svg:hover {
    color: var(--green350);
}

.content {
    line-height: 1.3rem;
    color: var(--textLight);

    margin: 0.5rem 1.75rem;
}

footer button{
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    margin-top: 1rem;
    padding: 0.7rem 1rem;

    border: 0;
    border-radius: 0.5rem;
    background: var(--green200);

    transition: all .3s ease-in-out;
}

footer button:hover {
    opacity: .9;
}

footer button span {
    color: var(--green350);
}
</style>