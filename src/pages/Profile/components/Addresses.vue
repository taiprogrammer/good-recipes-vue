<template>
    <div v-if="showLoader" class="loader">
        <Loader />
    </div>
    <div class="container">
        <template v-if="addresses !== null">
            <div class="address" v-for="(address, key) in addresses">
                <AddressCard :key="key" :rua="address.logradouro" :numero="address.numero" :cep="address.cep"
                    :cidade="address.cidade" :pais="address.pais" :id="address.endereco_id" @edit="goToEdit(address)"
                    @delete="deleteAddress" />
            </div>
        </template>
        <template v-if="noAddresses">
            <h2>Você não possui endereços cadastrados!</h2>
        </template>
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
import Loader from '../../../components/Loader.vue';

import { useRoute, useRouter } from 'vue-router';
import { api } from '../../../services';
import { PhArrowRight } from '@phosphor-icons/vue';
import { defineEmits, onBeforeMount, ref } from 'vue';

const emit = defineEmits(['newAddress', 'edit', 'delete']);

const route = useRoute();
const router = useRouter();

const addresses = ref(null);
const noAddresses = ref(false);
const showLoader = ref(true);

function goToNewAddress() {
    emit('newAddress');
}

function goToEdit(address) {
    emit('edit', address);
}

function deleteAddress(id) {
    emit('delete', id);
}

async function getAddresses() {
    const id = route.params.id;
    const token = JSON.parse(window.localStorage.getItem("token"));
    await api.get(`/address/${id}`, {
        headers: {
            'x-access-token': token
        }
    })
        .then(async ({ data }) => {
            if (data.length > 0) {
                addresses.value = data;
                showLoader.value = false;
                noAddresses.value = false;
            }
            if (data.length === 0) {
                showLoader.value = false;
                noAddresses.value = true;
            }
        }).catch((error) => {
            if (error.response.status === 401) {
                window.localStorage.clear();
                router.push("/login");
            }
        })
}

onBeforeMount(() => {
    getAddresses();
})
</script>

<style lang="css" scoped>
.address+.address {
    margin-top: 1rem;
}

.loader {
    padding-bottom: 3rem;
}

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