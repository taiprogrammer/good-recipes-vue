<template>
    <Header />
    <main>
        <div class="container">
            <div class="signup">
                <div>
                    <img src="../../assets/cover-cadastro.jpg" alt="Imagem cadastro">
                </div>
                <div>
                    <h1>Seja bem vindo!</h1>
                    <form>
                        <div>
                            <label for="nome">Nome completo</label>
                            <input type="text" name="nome" id="nome">
                        </div>
                        <div>
                            <label for="email">Insira um email</label>
                            <input type="email" name="email" id="email">
                        </div>
                        <div>
                            <label for="confirm_email">Confirme o email</label>
                            <input type="email" name="confirm_email" id="confirm_email">
                        </div>
                        <div>
                            <label for="data_nascimento">Data de nascimento</label>
                            <input type="date" name="data_nascimento" id="data_nascimento">
                        </div>
                        <div>
                            <label for="senha">Insira uma senha</label>
                            <input type="password" name="senha" id="senha">
                        </div>
                        <button>Cadastrar</button>
                        <div class="divider"></div>
                        <p>Possui uma conta? <RouterLink to="/login">Faça login.</RouterLink>
                        </p>
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
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.container {
    width: 90%;
    margin: 0 auto;
}

.signup {
    gap: 10rem;
    display: flex;
    margin: 5rem 0;
}

.signup div {
    width: 100%;
}

h1 {
    color: var(--green250);
    font-family: 'Anton', sans-serif;
}

form {
    width: 75%;
    align-self: center;

    margin-top: 1rem;
}

form div+div {
    margin-top: 0.5rem;
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
</style>