<template>
<div class="carousel" ref="carousel">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
    <img
        v-for="(slide, index) in images"
        :key="index"
        :src="getImageUrl(slide)"
        class="slide"
    />
    </div>
    <div class="progress-bar">
    <div
        v-for="(slide, index) in images"
        :key="index"
        class="progress"
        :class="{ active: index === currentSlide }"
    ></div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
images: {
    type: Array,
    required: true
}
})

const getImageUrl = (image) => new URL(`../assets/images/${image}`, import.meta.url).href

const currentSlide = ref(0)
const nextSlide = () => {
currentSlide.value = (currentSlide.value + 1) % props.images.length
}

const carousel = ref(null)

const handleScroll = () => {
const scrollY = window.scrollY
const triggerPoint = 300
if (carousel.value) {
    carousel.value.style.opacity = Math.max(1 - scrollY / triggerPoint, 0)
    carousel.value.style.transform = `translateY(${scrollY / 2}px)`
}
}

onMounted(() => {
setInterval(nextSlide, 5000)
window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.carousel {
position: absolute;
left: 0;
height: 100vh;
overflow: hidden;
top: 0;
transition: opacity 0.6s ease, transform 0.6s ease;
width: 100%;
}

.slides {
display: flex;
width: 100%;
transition: transform 1.5s ease-out;
}

.slide {
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
}

.progress-bar {
display: flex;
justify-content: center;
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
margin-bottom: 10px;
}

.progress {
width: 50px;
height: 6px;
margin: 3px 5px;
background: white;
opacity: 0.5;
transition: opacity 0.3s ease-in-out;
border-radius: 20%;
}

.progress.active {
opacity: 1;
}
</style>
