<template>
  <div>
    <div
      ref="container"
      class="keen-slider container"
    >
      <div class="keen-slider__slide number-slide1">
        <img
          src="../assets/carousel/food-one.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide2">
        <img
          src="../assets/carousel/food-two.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide3">
        <img
          src="../assets/carousel/food-three.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide4">
        <img
          src="../assets/carousel/food-four.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide5">
        <img
          src="../assets/carousel/food-five.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide6">
        <img
          src="../assets/carousel/food-six.jpg"
          alt=""
        >
      </div>
    </div>
    <div
      ref="thumbnail"
      class="keen-slider thumbnail"
    >
      <div class="keen-slider__slide number-slide1">
        <img
          src="../assets/carousel/food-one.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide2">
        <img
          src="../assets/carousel/food-two.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide3">
        <img
          src="../assets/carousel/food-three.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide4">
        <img
          src="../assets/carousel/food-four.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide5">
        <img
          src="../assets/carousel/food-five.jpg"
          alt=""
        >
      </div>
      <div class="keen-slider__slide number-slide6">
        <img
          src="../assets/carousel/food-six.jpg"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

function ThumbnailPlugin(main) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove('active')
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add('active')
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener('click', () => {
                    main.value.moveToIdx(idx)
                })
            })
        }

        slider.on('created', () => {
            addActive(slider.track.details.rel)
            addClickEvents()
            main.value.on('animationStarted', () => {
                removeActive()
                const next = main.value.animator.targetIdx || 0
                addActive(main.value.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export default {
    setup() {
        const [container, slider] = useKeenSlider()
        const [thumbnail] = useKeenSlider({
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10
            },
        },
            [ThumbnailPlugin(slider)])
        return { container, thumbnail }
    }
}
</script>

<style lang="css" scoped>
[class^="number-slide"],
[class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 200px;
    max-height: 100vh;
}

.thumbnail .keen-slider__slide {
    font-size: 30px;
    margin-top: 10px;
    height: 100px;
}

.thumbnail .keen-slider__slide {
    cursor: pointer;
    height: 15vh;
    object-fit: cover;
}

.thumbnail .keen-slider__slide.active {
    border: 2px dashed black;
}

.container .keen-slider__slide {
    height: 65vh;
    object-fit: cover;
}

.container .keen-slider__slide img {
    width: 100vw;
}

.thumbnail .keen-slider__slide img {
    width: 100%;
}
</style>