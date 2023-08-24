<template>
    <div class="container">
        <AddressCard @edit="goToEdit"/>
        <AddressCard @edit="goToEdit"/>
        <AddressCard @edit="goToEdit"/>
        <footer>
            <button @click="goToNewAddress">
                <span>Adicionar endereço</span>
                <PhArrowRight size="20" />
            </button>
        </footer>
    </div>
</template>

<script setup>
import AddressCard from './AddressCard.vue';

import { defineEmits } from 'vue';
import { PhArrowRight } from '@phosphor-icons/vue';

const emit = defineEmits(['newAddress', 'edit']);

function goToNewAddress() {
    emit('newAddress');
}

function goToEdit() {
    emit('edit');
}
</script>

<style lang="css" scoped>
footer button {
    width: 94%;

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