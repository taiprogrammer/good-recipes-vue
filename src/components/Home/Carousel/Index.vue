<template>
    <div class="carousel-">
        <div class="carousel-inner-">
            <div class="carousel-item-" v-for="(item, key) in slides" :key="key">
                <transition name="slide-in">
                    <img v-show="currentSlide === key" :src="item">
                </transition>
                </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';

const slides = ref([
    'http://localhost:5173/assets/carousel/food-one.jpg',
    'http://localhost:5173/assets/carousel/food-two.jpg',
    'http://localhost:5173/assets/carousel/food-three.jpg',
]);

const currentSlide = ref(0);
const slideInterval = ref(0);

function setCurrentInterval(index) {
    currentSlide.value = index;
}

function fillInterval() {
    slideInterval.value = setInterval(() => {
        const index = currentSlide.value < slides.value.length - 1 ? currentSlide.value + 1 : 0;
        setCurrentInterval(index);
    }, 3000)
}

function clearSlideInterval() {
    clearInterval(slideInterval.value);
}

onMounted(() => fillInterval());

onBeforeUnmount(() => clearSlideInterval());

</script>

<style lang="css" scoped>
.carousel- {
    display: flex;
    justify-content: center;

    margin: 3rem 0;
}

.carousel-inner- {
    position: relative;
    width: 900px;
    height: 500px;
    overflow: hidden;
    border-radius: 0.5rem;

    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
}

.carousel-item- {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.carousel-item- img {
    width: 900px;
}

.slide-in-enter-active,
.slide-in-leave-active {
    transition: all 1s ease-in-out;
}

.slide-in-enter-from {
    transform: translateX(-100%);
}

.slide-in-leave-to {
    transform: translateX(100%);
}
</style>