<template>
    <Header />
    <main>
        <Sidebar />
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
        </div>
    </main>
</template>

<script setup>
import Header from '../../components/Header.vue';
import MyRecipeCard from '../../components/MyRecipeCard.vue';
import Sidebar from '../../components/Sidebar.vue';
</script>

<style lang="css" scoped>
main {
    width: 90%;
    margin: 3rem auto;

    gap: 4rem;
    display: flex;
}

.container {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    height: 800px;
    width: 96%;
    max-height: 800px;

    overflow-y: auto;

    padding: 0 2rem;
}
</style>