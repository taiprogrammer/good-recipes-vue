<template>
    <Modal @close="close">
        <template #header>
            Atenção
        </template>
        <template #content>
            <p>Tem certeza de que deseja excluir este endereço?</p>
        </template>
        <template #footer>
            <button class="danger" @click="close">Cancelar</button>
            <button class="success" @click="exclude">Excluir</button>
        </template>
    </Modal>
</template>
  
<script setup>
import Modal from '../../../components/Modal.vue';

import { defineEmits } from 'vue';

const emit = defineEmits(['close', 'exclude']);

function close() {
    emit('close');
}

function exclude() {
    emit('exclude');
}
</script>
<style lang="css" scoped>
button {
    border: 0;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;

    cursor: pointer;

    transition: all 0.3s ease-in-out;
}

.danger {
    color: var(--white);
    background: var(--red500);
}

.danger:hover,
.success:hover {
    opacity: .8;
}

.success {
    color: var(--white);
    background: var(--green400);
}
</style>