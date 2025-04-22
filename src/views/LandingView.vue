<template>
  <div class="landing-page">
    <Navbar />
    <HeroSection />
    <CompanyInfo />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import HeroSection from "../components/HeroSection.vue";
import CompanyInfo from "../components/CompanyInfo.vue";
import Footer from "../components/Footer.vue";
</script>

<style>
.landing-page {
  width: 100vw;
  overflow-x: clip;
  position: relative;
  font-family: 'Inter', sans-serif;
  color: white;
}
</style>
