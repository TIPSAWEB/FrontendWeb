<template>
    <div class="about-us">
        <Navbar />
        <CarouselSolution />
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
    import Navbar from "../components/Navbar.vue";
    import CarouselSolution from "../components/CarouselSolutions.vue";
    import ProjectsInfo from "../components/ProjectsInfo.vue";
    import Project1 from "../components/Project1.vue";
    import Project2 from "../components/Project2.vue";
    import ProjectsList from "../components/ProjectsList.vue";


    import Footer from "../components/Footer.vue";
</script>

<style scoped>
.about-us {
    font-family: 'Inter', sans-serif;
    color: white;
}

.content {
    padding-top: 58%; /* Para que el carrusel no cubra la sección SolutionsInfo.vue */
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>
