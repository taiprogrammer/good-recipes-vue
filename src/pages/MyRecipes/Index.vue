<template>
    <Header />
    <main>
        <div class="container">
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
        </div>
    </main>
    <Footer />
</template>

<script setup>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import MyRecipeCard from '../../components/MyRecipeCard.vue';
</script>

<style lang="css" scoped>
.container {
    width: 90%;
    margin: 0 auto;

    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    height: 800px;
    max-height: 800px;

    overflow-y: auto;

    padding: 3rem 2rem;
}
</style>