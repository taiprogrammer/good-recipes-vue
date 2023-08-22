<template>
    <footer>
        <div class="wrapper">
            <div class="content">
                <div>
                    <h1>Categorias</h1>
                    <section>
                        <p>
                            <RouterLink to="/">
                                Sobremesas
                            </RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/">
                                Carnes
                            </RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/">
                                Massas
                            </RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/">
                                Saladas e molhos
                            </RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/">
                                Veganos
                            </RouterLink>
                        </p>
                    </section>
                </div>
                <div>
                    <h1>Sobre</h1>
                    <section>
                        <p>
                            <RouterLink to="/">
                                Quem somos
                            </RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/">
                                Política de privacidade
                            </RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/">
                                Termos de uso
                            </RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/">
                                Contato
                            </RouterLink>
                        </p>
                    </section>
                </div>
                <div>
                    <h1>Disponível em</h1>
                    <section>
                        <p>
                            <PhAppStoreLogo weight="fill" />
                            <RouterLink to="/">
                                App Store
                            </RouterLink>
                        </p>
                        <p>
                            <PhGooglePlayLogo weight="fill" />
                            <RouterLink to="/">
                                Google Play
                            </RouterLink>
                        </p>
                        <p>
                            <PhInstagramLogo weight="fill" />
                            <PhTwitterLogo weight="fill" />
                            <PhFacebookLogo weight="fill" />
                            <PhPinterestLogo weight="fill" />
                            <PhYoutubeLogo weight="fill" />
                        </p>
                    </section>
                    <img src="../assets/logo-dark-footer.png" alt="Logo Good Recipes">
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {
    PhAppStoreLogo, PhGooglePlayLogo, PhInstagramLogo,
    PhTwitterLogo, PhFacebookLogo, PhPinterestLogo, PhYoutubeLogo
} from '@phosphor-icons/vue'
</script>

<style lang="css" scoped>
footer {
    padding: 1rem;
    background: var(--green750);
}

.wrapper {
    width: 90%;
    margin: 0 auto;
}

.content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

h1 {
    color: var(--green090);
    font-size: 1.4rem;

    margin-bottom: 1rem;
}

p {
    gap: 0.5rem;
    display: flex;
    align-items: center;

    padding: 0.5rem 0;
}

a {
    color: var(--gray200);
    text-decoration: none;
    transition: color 0.5s;
}

a:hover {
    color: var(--gray090);
}

svg {
    color: var(--gray200);
}

img {
    height: 80px;
    margin-top: 0.5rem;
}
</style>