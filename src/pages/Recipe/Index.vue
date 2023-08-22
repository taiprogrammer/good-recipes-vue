<template>
    <Header />
    <Topic />
    <main>
        <div class="container">
            <h1>Nome Receita</h1>
            <div class="box-recipe">
                <div class="container-cover">
                <img src="../../assets/no-image/cover.png" alt="">
                <div>
                    <RouterLink to="/">Autor</RouterLink>
                </div>
            </div>
            <div class="container-info">
                <h2>Ingredientes</h2>
                <div class="ingredientes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima iusto ex cupiditate quibusdam
                    magni, voluptas dolorum iure ipsum cumque odit sit est vel esse? Maiores numquam eaque consequatur quo.
                </div>
                <h2>Modo de preparo</h2>
                <div class="modo-preparo">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit iusto eaque, molestias
                    architecto
                    sapiente, repudiandae doloribus rem maxime repellendus mollitia quaerat itaque! Odit atque eos nemo
                    animi
                    doloremque ratione?
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
import Topic from '../../components/Topic.vue';
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

    margin: 2.5rem 0;
}

h2 {
    font-size: 2.5rem;
    font-family: 'Anton', sans-serif;

    color: var(--green300);

    margin-bottom: 2.5rem;
}

main {
    margin-bottom: 5rem;
}

a {
    color: var(--green300);
    text-decoration: none;
}

.container-cover {
    width: fit-content;
}

.container-cover img {
    margin: 0 auto;
    height: 350px;
}

.container-cover div {
    display: flex;
    justify-content: center;
}

.ingredientes,
.modo-preparo {
    width: 40%;
}

.box-recipe {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
</style>