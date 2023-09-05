<template>
    <Transition>
        <DeleteAddress v-if="deleteAddressIsShown" @close="closeDeleteAddress" @exclude="deleteAddress"/>
    </Transition>
    <Transition>
        <ModalProfileEdit v-if="editIsShown" @close="closeEditModal" :user-data="userData" />
    </Transition>
    <Transition>
        <ModalPasswordChange v-if="passwordChangeIsShown" @close="closePasswordChangeModal" />
    </Transition>
    <Transition>
        <MyAddressesModal v-if="myAddressesModalIsShown" @close="closeMyAddressesModal" @delete="getAddressIdToDelete" />
    </Transition>
    <Header />
    <main>
        <Sidebar :user-data="userData" />
        <div class="info">
            <div class="title">
                <PhClipboardText size="25" />
                <h1>Meus dados</h1>
                <PhPencil @click="openEditModal" size="25" class="edit" />
            </div>
            <div class="user-data">
                <div class="field">
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" :value="userData !== null ? userData.nome : ''" disabled>
                </div>
                <div class="field">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" :value="userData !== null ? userData.email : ''" disabled>
                </div>
                <div class="field">
                    <label for="data_nascimento">Data de Nascimento:</label>
                    <input type="date" name="data_nascimento" id="data_nascimento"
                        :value="userData !== null ? userData.dataNascimento : ''" disabled>
                </div>
            </div>
            <div class="options">
                <div class="option">
                    <h4>Meus endereços</h4>
                    <a @click="openMyAddressesModal">Meus endereços</a>
                </div>
                <div class="option">
                    <h4>Credenciais de acesso</h4>
                    <a @click="openPasswordChangeModal">Mudar minha senha</a>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>

<script setup>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Sidebar from '../../components/Sidebar.vue';
import ModalProfileEdit from './components/ModalProfileEdit.vue';
import MyAddressesModal from './components/MyAddressesModal.vue';
import ModalPasswordChange from './components/ModalPasswordChange.vue';

import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router';
import { PhClipboardText, PhPencil } from '@phosphor-icons/vue';
import { api } from '../../services';
import DeleteAddress from './components/DeleteAddress.vue';
import { toast } from 'vue3-toastify';

const route = useRoute();

const editIsShown = ref(false);
const passwordChangeIsShown = ref(false);
const myAddressesModalIsShown = ref(false);
const deleteAddressIsShown = ref(false);

const addressId = ref('');

const userData = ref(null);

async function getProfile() {
    const id = route.params.id;
    const token = window.localStorage.getItem("token") ? JSON.parse(window.localStorage.getItem("token")) : null;
    await api.get(`/user/${id}`, {
        headers: {
            "x-access-token": token
        }
    }).then(async ({ data }) => {
        userData.value = data;
    }).catch((error) => {
        console.log(error)
    })
}

async function deleteAddress() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')) : null;
    await api.delete(`/address/${addressId.value}`, {
        headers: {
            'x-access-token': token
        }
    }).then(async ({ data }) => {
        toast.success('Endereço deletado com sucesso!', {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored"
        })
    }).catch((error) => {
        console.log(error);
    })
}

function getAddressIdToDelete(id) {
    deleteAddressIsShown.value = true;
    myAddressesModalIsShown.value = false;
    addressId.value = id;
}

function closeDeleteAddress() {
    deleteAddressIsShown.value = false;
    myAddressesModalIsShown.value = true;
}

function openEditModal() {
    editIsShown.value = true;
}

function closeEditModal() {
    editIsShown.value = false;
}

function openPasswordChangeModal() {
    passwordChangeIsShown.value = true;
}

function closePasswordChangeModal() {
    passwordChangeIsShown.value = false;
}

function openMyAddressesModal() {
    myAddressesModalIsShown.value = true;
}

function closeMyAddressesModal() {
    myAddressesModalIsShown.value = false;
}

onBeforeMount(() => {
    getProfile();
})
</script>

<style lang="css" scoped>
main {
    width: 90%;
    margin: 3rem auto;

    gap: 4rem;
    display: flex;
}

.info {
    width: 100%;
}

.title {
    gap: 0.5rem;
    display: flex;
    align-items: center;
}

.user-data {
    margin: 2.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid var(--gray-300);
}

.field {
    margin: 1rem 0;

    display: flex;
    gap: 0.5rem;
    flex-direction: column;
}

label {
    font-size: 1.1rem;
    color: var(--textLight);
}

input {
    width: 90%;
    display: block;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: var(--textMedium);
    background-clip: padding-box;
    border: 1px solid #CED4DA;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    transition: border-color .15s ease-in-out, box-shaddow .15s ease-in-out;
}

a {
    cursor: pointer;
}

.options {
    display: flex;
    flex-direction: column;
}

.option {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.5rem;
    border-radius: 0.5rem;
    background: var(--gray090);

    width: 90%;
}

.option+.option {
    margin: 1rem 0;
}

.option h4 {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--textMedium);
}

.option a {
    text-decoration: none;
    color: var(--green250);

    transition: all 0.2s ease-in-out;
}

.option a:hover {
    color: var(--green300);
}

.edit {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 9999px;
    color: var(--green400);
    border: 1px solid var(--gray090);

    transition: all 0.2s ease-in-out;
}

.edit:hover {
    color: var(--green350);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>