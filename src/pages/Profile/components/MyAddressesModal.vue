<template>
    <Modal @close="close">
        <template #header>
            <div class="title">
                Meus Endereços
                <PhMapPin />
            </div>
        </template>
        <template #content>
            <div class="container">
                <AddressCard />
                <AddressCard />
                <AddressCard />
            </div>
        </template>
    </Modal>
</template>

<script setup>
import AddressCard from './AddressCard.vue';
import Modal from '../../../components/Modal.vue';

import { PhMapPin } from '@phosphor-icons/vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

function close() {
    emit('close');
}
</script>

<style lang="css" scoped>
.title {
    gap: 0.5rem;
    display: flex;
    align-items: center;
}
</style>