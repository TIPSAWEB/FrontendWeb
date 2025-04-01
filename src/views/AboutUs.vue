<template>
    <div class="about-us">
        <Navbar />
        <Carousel />
        <div class="content">
            <Us />
            <Mision />
            <Vision />
            <Values />
            <Footer />
        </div>
    </div>
</template>

<script setup>
    import Navbar from "../components/Navbar.vue";
    import Carousel from "../components/Carousel.vue";
    import Us from "../components/Us.vue";
    import Mision from "../components/Mision.vue";
    import Vision from "../components/Vision.vue";
    import Values from "../components/Values.vue";
    import Footer from "../components/Footer.vue";
</script>

<style scoped>
.about-us {
    font-family: 'Inter', sans-serif;
    color: white;
}

.content {
    padding-top: 100vh; /* Para que el carrusel no cubra la sección Us.vue */
    width: 100%;
    overflow: hidden;
    max-width: 100%;
}
</style>
