<template>
    <div v-if="showLoader" class="container">
        <div class="skeleton"></div>
    </div>
    <div class="container">
        <template v-if="addresses !== null">
            <div class="address" v-for="(address, key) in addresses" :key="key">
                <AddressCard
                    :rua="address.logradouro"
                    :numero="address.numero"
                    :cep="address.cep"
                    :cidade="address.cidade"
                    :pais="address.pais"
                    :id="address.endereco_id"
                    @edit="goToEdit(address)"
                    @delete="deleteAddress" />
            </div>
        </template>
        <div class="no-address" v-if="noAddresses">
            <h2>Você não possui endereços cadastrados!</h2>
            <PhSmileySad size="30" />
        </div>
        <footer>
            <button @click="goToNewAddress">
                <span>Adicionar endereço</span>
                <PhArrowRight size="20" />
            </button>
        </footer>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { PhArrowRight, PhSmileySad } from '@phosphor-icons/vue';
import { defineEmits, onBeforeMount, ref } from 'vue';
import AddressCard from './AddressCard.vue';

import api from '../../../services/index';

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
  const { id } = route.params;
  const token = JSON.parse(window.localStorage.getItem('token'));
  await api.get(`/address/${id}`, {
    headers: {
      'x-access-token': token,
    },
  })
    .then(async ({ data }) => {
      if (data.length > 0) {
        addresses.value = data;
        setTimeout(() => {
          showLoader.value = false;
          noAddresses.value = false;
        }, 2500);
      }
      if (data.length === 0) {
        setTimeout(() => {
          showLoader.value = false;
          noAddresses.value = true;
        }, 2500);
      }
    }).catch((error) => {
      if (error.response.status === 401) {
        window.localStorage.clear();
        router.push('/login');
      }
    });
}

onBeforeMount(() => {
  getAddresses();
});
</script>

<style lang="css" scoped>
.address+.address {
    margin-top: 1rem;
}

@keyframes loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton {
  width: 90%;
  height: 80px;

  border-radius: 0.5rem;

  animation: loading 1s linear infinite alternate;
}

.no-address {
  margin: 2.5rem auto;
  width: 100%;

  display: flex;
  gap: 0.5rem;
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
