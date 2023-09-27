<template>
    <Header />
    <main>
        <div class="container">
            <section class="welcome">
                <div class="container-form">
                    <form>
                        <h1>Bem vindo de volta!</h1>
                        <div class="field">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" v-model="email">
                        </div>
                        <div class="field">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" id="senha" v-model="password">
                        </div>
                        <button @click="login">Entrar</button>
                        <div class="divider"></div>
                        <p>Não possui uma conta?
                        <RouterLink to="/signup">Cadastre - se aqui</RouterLink>
                        </p>
                    </form>
                </div>
                <div class="cover">
                    <img src="../../assets/cover-login.jpg" alt="Login cover">
                </div>
            </section>
        </div>
    </main>
    <Footer />
</template>

<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { RouterLink, useRouter } from 'vue-router';
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

import api from '../../services/index';

const email = ref('');
const password = ref('');

const router = useRouter();

async function login(event) {
  event.preventDefault();
  const payload = {
    email: email.value,
    senha: password.value,
  };

  if (email.value === '' || password.value === '') {
    toast.error('Campos obrigatórios faltantes', {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'colored',
    });
    return;
  }

  api.post('/user/login', payload).then(async ({ data }) => {
    toast.success('Login feito com sucesso. Estamos te redirecionando...', {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'colored',
    });
    localStorage.setItem('token', JSON.stringify(data.token));
    localStorage.setItem('userId', JSON.stringify(data.id));
    window.localStorage.setItem('username', JSON.stringify(data.nome));
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }).catch((error) => {
    if (error.response.data.status === 401) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
      });
    }
  });
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.container {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 5rem;
}

.welcome {
    gap: 10rem;
    display: flex;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.welcome div {
    width: 100%;
}

.container-form {
    display: flex;
    align-items: center;
}

form {
    width: 75%;
    align-self: center;
}

h1 {
    color: var(--green250);
    font-family: 'Anton', sans-serif;
}

form div+div {
    margin-top: 1rem;
}

form div {
    display: flex;
    flex-direction: column;
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

.divider {
    margin: 1rem 0;
    height: 0;
    overflow: hidden;
    border-top: 1px solid #E9ECEF;
}

p,
a {
    font-size: 0.9rem;
}

p {
    color: var(--textMedium);
}

a {
    color: var(--green400);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

a:hover {
    color: var(--green300);
    text-decoration: none;
}

img {
    width: 450px;
}

@media (min-width: 300px) and (max-width: 640px) {
    .cover {
        display: none;
    }

    form {
        width: 90%;
    }
}

@media (min-width: 640px) and (max-width: 768px) {
    .cover {
        display: none;
    }

    form {
        width: 90%;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .cover {
        display: none;
    }

    form {
        width: 90%;
    }
}
</style>
