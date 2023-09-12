<template>
    <Header />
    <main>
        <Sidebar />
        <div class="info">
            <div class="title">
                <PhNotepad size="25" />
                <h1>Enviar receita</h1>
            </div>
            <div class="wrapper">
                <div class="side-one">
                    <div class="wrapper_upload">
                        <img src="../../assets/no-image/cover.png" alt="">
                        <label class="label_file_upload" for="file_upload">
                            <PhPencil :size="30" />
                        </label>
                    </div>
                    <input type="file" id="file_upload" @change="getImage">
                    <p>{{ imageName }}</p>
                </div>
                <div class="side-two">
                    <form id="new_recipe">
                        <div class="field">
                            <label for="titulo">Título da Receita</label>
                            <input type="text" name="titulo" id="titulo" v-model="nome">
                        </div>
                        <div class="time">
                            <label>Tempo de preparo</label>
                            <div class="time-container">
                                <div class="field">
                                    <label for="hora">Hora(s)</label>
                                    <input type="number" name="hora" id="hora" v-model="horas">
                                </div>
                                <div class="field">
                                    <label for="minuto">Minuto(s)</label>
                                    <input type="number" name="minuto" id="minuto" v-model="minutos">
                                </div>
                                <div class="field">
                                    <label for="segundo">Segundo(s)</label>
                                    <input type="number" name="segundo" id="segundo" v-model="segundos">
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label for="porcoes">Número de porções</label>
                            <input type="number" name="porcoes" id="porcoes" v-model="porcoes">
                        </div>
                        <div class="field">
                            <label for="ingredientes" class="ingredientes">Ingredientes</label>
                            <QuillEditor v-model:content="ingredientes" theme="snow" :toolbar="[{ 'list': 'bullet' }]"
                                placeholder="Digite sua receita aqui">
                            </QuillEditor>
                        </div>
                        <div class="field">
                            <label for="preparo" class="preparo">Modo de preparo</label>
                            <QuillEditor v-model:content="modoPreparo" theme="snow" :toolbar="[{ 'list': 'bullet' }]"
                                placeholder="Digite o modo de preparo aqui">
                            </QuillEditor>
                        </div>
                        <button @click="sendRecipe">Enviar receita</button>
                    </form>
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

import { ref } from 'vue';
import { api } from '../../services/index.js';
import { QuillEditor } from '@vueup/vue-quill';
import { PhPencil, PhNotepad } from '@phosphor-icons/vue';
import { toast } from 'vue3-toastify';

const nome = ref("");
const horas = ref(0);
const minutos = ref(0);
const segundos = ref(0);
const porcoes = ref(0);
const imagem = ref(null);
const imageName = ref("");
const ingredientes = ref("");
const modoPreparo = ref("");
const newIngredientes = ref("");
const newModoPreparo = ref("");

function convertIngredientes() {
    const ingredientesValues = ingredientes.value.ops.filter(item => item.insert !== '\n');

    ingredientesValues.map((item) => {
        newIngredientes.value += `<li>${item.insert}</li>`
    })
}

function convertModoPreparo() {
    const modoPreparoValues = modoPreparo.value.ops.filter(item => item.insert !== '\n');

    modoPreparoValues.map((item) => {
        newModoPreparo.value += `<li>${item.insert}</li>`
    })
}

function getImage(event) {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    imagem.value = file;
    imageName.value = file.name
}

async function sendRecipe(event) {
    event.preventDefault();
    convertIngredientes();
    convertModoPreparo();

    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')) : null;
    const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null;

    const formData = new FormData();
    formData.append('imagem', imagem.value);
    formData.append('nome', nome.value);
    formData.append('horas', horas.value);
    formData.append('minutos', minutos.value);
    formData.append('porcoes', porcoes.value);
    formData.append('segundos', segundos.value);
    formData.append('ingredientes', newIngredientes.value);
    formData.append('modoPreparo', newModoPreparo.value);
    formData.append('usuarioId', userId);

    console.log(formData)

    await api.post('/recipe', formData, {
        headers: {
            "x-access-token": token
        }
    }).then(async ({ data }) => {
        toast.success("Receita adicionada com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored"
        })
    }).catch((error) => {
        console.log(error);
    })
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

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

.wrapper {
    width: 100%;
    max-height: 540px;
    overflow-y: auto;

    padding: 1rem;
}

.side-one {
    width: fit-content;
    margin: 3rem 0;
}

img {
    height: 15.625rem;
    border-radius: 9999px;
}

input[type="file"] {
    display: none;
}

.label_file_upload {
    cursor: pointer;
    width: fit-content;
}

.wrapper_upload {
    position: relative;
    width: fit-content;
    align-self: center;

    margin: 0 auto;
}

.label_file_upload svg {
    position: absolute;
    right: 1.5rem;
    top: 0.5rem;

    padding: 0.5rem;
    border-radius: 9999px;
    border: 1px solid var(--gray090);
    background-color: var(--white);
}

form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    margin-bottom: 4rem;
}

.field {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 1.3rem;
    color: var(--textMedium);
}

.time-container {
    gap: 5rem;
    width: 97%;
    display: flex;

    margin-top: 0.5rem;
}

.time-container label {
    font-size: 1rem;
}

input,
textarea {
    width: 96%;
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

.time-container {
    display: flex;

}

button {
    color: var(--gray090);
    background: var(--green750);

    border: 0;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;

    margin-top: 1rem;

    cursor: pointer;

    transition: all 0.3s ease-in-out;
}

button:hover {
    opacity: 0.8;
}

.ingredientes,
.preparo {
    margin-bottom: 0.5rem;
}
</style>