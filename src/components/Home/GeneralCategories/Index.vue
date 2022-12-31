<template>
    <section>
        <div class="container">
            <ButtonNavigation text="Sobremesas" to="/" type="category" />
            <ButtonNavigation text="Carnes" to="/" type="category" />
            <ButtonNavigation text="Massas" to="/" type="category" />
            <ButtonNavigation text="Saladas e molhos" to="/" type="category" />
            <ButtonNavigation text="Vegano" to="/" type="category" />
            <ButtonNavigation text="Todas as receitas" to="/" type="category" />
        </div>
    </section>
</template>

<script setup>
import ButtonNavigation from "../../Header/ButtonNavigation.vue"
</script>

<style lang="css" scoped>
section {
    padding: 1rem 0;
    background: var(--green-750);
}

.container {
    display: grid;
    gap: 2rem;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>