<template>
    <Modal @close="closeModal">
        <template #header>
            Mudar senha
        </template>
        <template #content>
            <form>
                <div class="field">
                    <label for="new_password">Digite a nova senha</label>
                    <input type="password" name="new_password" id="new_password" v-model="newPassword">
                </div>
                <div class="field">
                    <label for="confirm_new_password">Confirme a nova senha</label>
                    <input type="password" name="confirm_new_password" id="confirm_new_password" v-model="confirmPassword">
                </div>
            </form>
        </template>
        <template #footer>
            <button class="danger" @click="closeModal">Cancelar</button>
            <button class="success" @click="changePassword">Salvar</button>
        </template>
    </Modal>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import Modal from '../../../components/Modal.vue';

import { toast } from 'vue3-toastify';
import { defineEmits, ref } from 'vue';
import { api } from '../../../services';

const emit = defineEmits(['close']);

const route = useRoute();
const router = useRouter();

const newPassword = ref('');
const confirmPassword = ref('');

async function changePassword() {
    const id = route.params.id;
    const token = window.localStorage.getItem("token") ? JSON.parse(window.localStorage.getItem("token")) : null;

    if (newPassword.value !== confirmPassword.value) {
        toast.error("Senhas não coincidem!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored"
        })

        return
    }

    if (newPassword.value === '' || confirmPassword.value === '') {
        toast.error("Campos obrigatórios vazios", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored"
        });

        return
    }

    await api.put(`/user/${id}`, {
        senha: newPassword.value
    }, {
        headers: {
            "x-access-token": token
        }
    }).then(async ({ data }) => {
        toast.success("Senha alterada com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored"
        })
    }).catch((error) => {
        if (error.response.status === 401) {
            window.localStorage.clear();
            router.push("/login");
        }
    })

}

function closeModal() {
    emit('close');
}
</script>

<style lang="css" scoped>
form {
    width: 60%;
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