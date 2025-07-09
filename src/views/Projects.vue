<template>
<div class="projects-view">
    <Navbar />
    <Carousel :images="projectSlides" />
    <div class="content">
    <ProjectsInfo />
    <Project1 />
    <Project2 />
    <ProjectsList />
    </div>
    <Footer />
</div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import Carousel from "../components/Carousel.vue"
import ProjectsInfo from "../components/ProjectsInfo.vue"
import Project1 from "../components/Project1.vue"
import Project2 from "../components/Project2.vue"
import ProjectsList from "../components/ProjectsList.vue"
import Footer from "../components/Footer.vue"
import projectSlides from '../data/carousel-projects.json'
</script>

<style scoped>
.projects-view {
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
