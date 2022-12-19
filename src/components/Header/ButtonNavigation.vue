<template>
    <RouterLink :to="path">
        <span>
            {{ text }}
        </span>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    text: {
        type: String
    },
    path: {
        type: String
    }
})

</script>

<style lang="css" scoped>
span {
    font-size: 1.1rem;
}
</style>