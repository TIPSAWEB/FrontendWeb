<template>
<div class="contact-view">
    <Navbar />
    <Carousel :images="carouselImages" />
    <div class="content">
    <FormContact />
    </div>
    <Footer />
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import FormContact from '../components/FormContact.vue'
import Footer from '../components/Footer.vue'
import contactSlides from '../data/carousel-contact.json'

export default {
components: {
Navbar,
Carousel,
FormContact,
Footer
},
data() {
return {
    carouselImages: contactSlides
}
}
}
</script>

<style scoped>
.contact-view {
font-family: 'Inter', sans-serif;
color: black;
}

.content {
padding-top: 100vh;
left: 0;
right: 0;
overflow: hidden;
}
</style>
