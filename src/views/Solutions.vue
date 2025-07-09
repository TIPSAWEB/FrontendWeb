<template>
<div class="solutions-view">
    <Navbar />
    <Carousel :images="solutionSlides" />
    <div class="content">
    <SolutionsInfo />
    <SolutionsGallery />
    <Design />
    <InstallationCommissioning />
    <Footer />
    </div>
</div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import Carousel from "../components/Carousel.vue"
import SolutionsInfo from "../components/SolutionsInfo.vue"
import SolutionsGallery from "../components/SolutionsGallery.vue"
import Design from "../components/Design.vue"
import InstallationCommissioning from "../components/InstallationCommissioning.vue"
import Footer from "../components/Footer.vue"
import solutionSlides from '../data/carousel-solutions.json'
</script>

<style scoped>
.solutions-view {
font-family: 'Inter', sans-serif;
color: white;
}

.content {
padding-top: 100vh;
left: 0;
right: 0;
overflow: hidden;
}
</style>
