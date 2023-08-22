<template>
    <Header />
    <main>
        <div class="container">
            <h1>Envie sua receita</h1>

            <div class="container-recipe">
                <div class="wrapper">
                    <div class="side-one">
                        <div class="wrapper_upload">
                            <img src="../../assets/no-image/cover.png" alt="">
                            <label class="label_file_upload" for="file_upload">
                                <PhPencil :size="30" />
                            </label>
                        </div>

                        <input type="file" id="file_upload">
                    </div>
                    <div>
                        <form>
                            <div class="field">
                                <label for="titulo">Título da Receita</label>
                                <input type="text" name="titulo" id="titulo">
                            </div>
                            <div class="time">
                                <label>Tempo de preparo</label>
                                <div class="time-container">
                                    <div class="field">
                                        <label for="hora">Hora(s)</label>
                                        <input type="number" name="hora" id="hora">
                                    </div>
                                    <div class="field">
                                        <label for="minuto">Minuto(s)</label>
                                        <input type="number" name="minuto" id="minuto">
                                    </div>
                                    <div class="field">
                                        <label for="segundo">Segundo(s)</label>
                                        <input type="number" name="segundo" id="segundo">
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label for="porcoes">Número de porções</label>
                                <input type="number" name="porcoes" id="porcoes">
                            </div>
                            <div class="field">
                                <label for="ingredientes" class="ingredientes">Ingredientes</label>
                                <QuillEditor v-model:content="ingredientes" theme="snow" toolbar="minimal" placeholder="Digite sua receita aqui">
                                </QuillEditor>
                            </div>
                            <div class="field">
                                <label for="preparo" class="preparo">Modo de preparo</label>
                                <QuillEditor v-model:content="modoPreparo" theme="snow" toolbar="minimal" placeholder="Digite o modo de preparo aqui">
                                </QuillEditor>
                            </div>
                            <button>Enviar receita</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>

<script setup>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

import { PhPencil } from '@phosphor-icons/vue';
import { QuillEditor } from '@vueup/vue-quill';
import { ref } from 'vue';

const ingredientes = ref("");
const modoPreparo = ref("")
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.container {
    width: 90%;
    margin: 0 auto;
}

h1 {
    font-size: 3.5rem;
    font-family: 'Anton', sans-serif;

    color: var(--green250);

    margin: 2rem 0;
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    margin: 1rem 0;
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
.side-one {
    align-items: center;
    margin: auto 0;
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
    display: flex;
    width: 97%;
    justify-content: space-between;

    margin-top: 0.5rem;
}

.time-container label {
    font-size: 1rem;
}

input {
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
    border: 0;
    border-radius: 0.2rem;

    cursor: pointer;

    margin-top: 1rem;
    color: var(--gray090);
    padding: 0.6rem 3rem;
    background: var(--green750);

    transition: all 0.3s ease-in-out;
}

button:hover {
    opacity: 0.8;
}

.ingredientes, .preparo {
    margin-bottom: 0.5rem;
}
</style>