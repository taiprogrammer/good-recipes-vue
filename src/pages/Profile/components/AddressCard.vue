<template>
    <div class="wrapper">
        <header>
            <div class="info_street">
                <PhHouse size="20" />
                <p>{{ rua }}, {{ numero }}</p>
            </div>
            <div class="options">
                <button @click="deleteAddress(id)">
                    <PhTrash size="20" />
                </button>
                <button @click="edit">
                    <PhPencil size="20" />
                </button>
            </div>
        </header>
        <div class="content">
            <p>CEP {{ cep }} - {{ cidade }}, {{ pais }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
import { PhHouse, PhPencil, PhTrash } from '@phosphor-icons/vue';

defineProps({
  rua: String,
  numero: Number,
  cep: String,
  cidade: String,
  pais: String,
  id: String,
});

const emit = defineEmits(['edit', 'delete']);

function edit() {
  emit('edit');
}

function deleteAddress(id) {
  emit('delete', id);
}
</script>

<style lang="css" scoped>
.wrapper {
    width: 90%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--gray300);
    position: relative;
}

.wrapper+.wrapper {
    margin-top: 1rem;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.info_street {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    color: var(--textMedium);
}

.options {
    gap: 0.5rem;
    display: flex;
    align-items: center;
}

.options button{
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.3rem;

    border: 0;
    cursor: pointer;
    background: none;
}

button svg {
    color: var(--green250);

    transition: all .3s ease-in-out;
}

button svg:hover {
    color: var(--green350);
}

.content {
    line-height: 1.3rem;
    color: var(--textLight);

    margin: 0.5rem 1.75rem;
}
</style>
