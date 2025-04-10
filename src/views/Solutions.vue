<template>
    <div class="about-us">
        <Navbar />
        <CarouselSolution />
        <div class="content">
            <SolutionsInfo />
            <SolutionsGallery />
            <Design />

            <Footer />
        </div>
    </div>
</template>

<script setup>
    import Navbar from "../components/Navbar.vue";
    import CarouselSolution from "../components/CarouselSolutions.vue";
    import SolutionsInfo from "../components/SolutionsInfo.vue";
    import SolutionsGallery from "../components/SolutionsGallery.vue";
    import Design from "../components/Design.vue";

    import Footer from "../components/Footer.vue";
</script>

<style scoped>
.about-us {
    font-family: 'Inter', sans-serif;
    color: white;
}

.content {
    padding-top: 100vh; /* Para que el carrusel no cubra la sección SolutionsInfo.vue */
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>
