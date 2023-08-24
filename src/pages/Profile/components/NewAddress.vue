<template>
    <header @click="back">
        <PhArrowLeft size="20" />
        <span>Voltar</span>
    </header>
    <form>
        <div class="title">
            <h2>Adicionar novo endereço</h2>
        </div>
        <div class="fields">
            <div class="field">
                <label for="cep">CEP</label>
                <input type="text" name="cep" id="cep">
            </div>
            <div class="field">
                <label for="rua">Rua</label>
                <input type="text" name="rua" id="rua">
            </div>
            <div class="field">
                <label for="numero">Número</label>
                <input type="number" name="numero" id="numero">
            </div>
            <div class="field">
                <label for="cidade">Cidade</label>
                <input type="text" name="cidade" id="cidade">
            </div>
            <div class="field">
                <label for="pais">País</label>
                <input type="text" name="pais" id="pais">
            </div>
        </div>
    </form>
    <footer>
        <button class="danger" @click="back">Cancelar</button>
        <button class="success">Salvar</button>
    </footer>
</template>

<script setup>
import { defineEmits } from 'vue';
import { PhArrowLeft } from '@phosphor-icons/vue';

const emit = defineEmits(['back']);

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

.field + .field {
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