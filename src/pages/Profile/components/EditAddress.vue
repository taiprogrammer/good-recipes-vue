<template>
    <header @click="back">
        <PhArrowLeft size="20" />
        <span>Voltar</span>
    </header>
    <form>
        <div class="title">
            <h2>Editar endereço</h2>
        </div>
        <div class="fields">
            <div class="field">
                <label for="cep">CEP</label>
                <input type="text" name="cep" id="cep" v-model="cep" @change="doCepSearch">
            </div>
            <div class="field">
                <label for="rua">Rua</label>
                <input type="text" name="rua" id="rua" v-model="logradouro">
            </div>
            <div class="field">
                <label for="numero">Número</label>
                <input type="text" name="numero" id="numero" v-model="numero">
            </div>
            <div class="field">
                <label for="cidade">Cidade</label>
                <input type="text" name="cidade" id="cidade" v-model="cidade">
            </div>
            <div class="field">
                <label for="pais">País</label>
                <input type="text" name="pais" id="pais" v-model="pais">
            </div>
        </div>
    </form>
    <footer>
        <button class="danger" @click="back">Cancelar</button>
        <button class="success" @click="handleSaveAddress">Salvar</button>
    </footer>
</template>

<script setup>
import { defineEmits, ref } from 'vue';
import { PhArrowLeft } from '@phosphor-icons/vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from '../../../services';
import { toast } from 'vue3-toastify';

const props = defineProps({
    address: Object
})

const route = useRoute();
const router = useRouter();

const emit = defineEmits(['back']);

const cep = ref(props.address.cep);
const logradouro = ref(props.address.logradouro);
const numero = ref(props.address.numero);
const cidade = ref(props.address.cidade);
const pais = ref(props.address.pais);

async function handleSaveAddress() {
    const address_id = props.address.endereco_id;
    const user_id = Number(route.params.id);
    const token = window.localStorage.getItem("token") ? JSON.parse(window.localStorage.getItem("token")) : null;

    await api.put(`/address/${address_id}`, {
        usuarioId: user_id,
        logradouro: logradouro.value,
        numero: numero.value,
        cep: cep.value,
        cidade: cidade.value,
        pais: pais.value
    }, {
        headers: {
            "x-access-token": token
        }
    }).then(async ({ data }) => {
        toast.success("Endereço atualizado com sucesso. Espere a página recarregar.", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored"
        })

        setTimeout(() => {
            router.go(0);
        }, 5000)
    }).catch((error) => {
        if (error.response.status === 401) {
            window.localStorage.clear();
            router.push("/login");
        }
    })
}

async function doCepSearch() {
    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    const data = await response.json();

    if (data) {
        logradouro.value = data.logradouro;
        cidade.value = data.localidade;
    }
}

function back() {
    emit('back');
}
</script>

<style lang="css" scoped>
header {
    gap: 0.5rem;
    display: flex;
    align-items: center;

    cursor: pointer;
    color: var(--green250);

    transition: all .3s ease-in-out;
}

header:hover {
    color: var(--green350);
}

form {
    width: 90%;
    margin: 1rem 0.5rem;
}

.title {
    margin: 1rem 0;
    color: var(--textMedium);
}

.field {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
}

.field+.field {
    margin-top: 1rem;
}

label {
    color: var(--textMedium);
}

input {
    width: 100%;
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

footer {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-right: 3rem;
}

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