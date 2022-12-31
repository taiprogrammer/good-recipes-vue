<template>
    <RouterLink :to="path" :class="type === 'header' ? 'header' : 'category'">
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
    },
    type: {
        type: String,
        default: 'header'
    }
})

</script>

<style lang="css" scoped>
span {
    font-size: 1.1rem;
}

a.header {
    text-decoration: none;
    color: var(--green-400);
}

a.header:hover {
    text-decoration: none;
    color: var(--green-500);
}

a.category {
    text-decoration: none;
    color: var(--white);
}

a.category:hover {
    text-decoration: underline;
}
</style>