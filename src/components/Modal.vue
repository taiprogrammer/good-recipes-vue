<template>
  <div class="modal_overlay">
    <div class="modal">
      <header>
        <slot name="header" />
        <button @click="closeModal">
          <PhXCircle
            class="close"
            size="25"
          />
        </button>
      </header>
      <section>
        <slot name="content" />
      </section>
      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import { PhXCircle } from '@phosphor-icons/vue';

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}
</script>

<style lang="css" scoped>
.modal_overlay {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
}

.modal {
    overflow-y: auto;
    max-height: 90vh;
    margin: 8vh auto;
    overflow-x: hidden;
    width: 50vw;

    border-radius: 0.5rem;
    background: var(--white);

    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
}

header {
    min-height: 3.563rem;

    font-weight: 500;
    line-height: 120%;
    font-size: 1.25rem;
    letter-spacing: 1px;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--textMedium);
}

section {
    flex: 1;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;

    padding: 1rem 1.5rem;
}

.close {
    cursor: pointer;
}

footer {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 1rem 1.5rem;
}

button {
    border: 0;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
}
</style>
