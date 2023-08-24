<template>
    <Modal @close="close">
        <template #header>
            <div class="title">
                Meus Endereços
                <PhMapPin />
            </div>
        </template>
        <template #content>
            <Addresses v-if="isAddressesShown" @new-address="openNewAddressSection" />
            <NewAddress v-if="isNewAddressShown" @back="backToAddresses" />
        </template>
    </Modal>
</template>

<script setup>
import Addresses from './Addresses.vue';
import NewAddress from './NewAddress.vue';
import Modal from '../../../components/Modal.vue';

import { PhMapPin } from '@phosphor-icons/vue';
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['close']);

const isAddressesShown = ref(true);
const isNewAddressShown = ref(false);

function close() {
    emit('close');
}

function openNewAddressSection() {
    isAddressesShown.value = false;
    isNewAddressShown.value = true;
}

function backToAddresses() {
    isNewAddressShown.value = false;
    isAddressesShown.value = true;
}
</script>

<style lang="css" scoped>
.title {
    gap: 0.5rem;
    display: flex;
    align-items: center;
}

.v-enter-active {
    transition: all 0.3s ease-out;
}

.v-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>