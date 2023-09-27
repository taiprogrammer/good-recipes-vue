<template>
  <section>
    <div class="container">
      <a href="#">Sobremesas</a>
      <a href="#">Carnes</a>
      <a href="#">Massas</a>
      <a href="#">Saladas e molhos</a>
      <a href="#">Vegano</a>
      <a href="#">Todas as receitas</a>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
section {
    padding: 1rem 0;
    background: var(--green750);
}

.container {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    text-align: center;
}

a {
    color: var(--white);
    align-self: center;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

@media (min-width: 300px) and (max-width: 640px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    padding: 0.5rem;
  }
}

@media (min-width: 640px) and (max-width: 768px) {
  .container {
    padding: 0.5rem;
  }
}
</style>
