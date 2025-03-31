<template>
  <section class="hero">
    <div class="trapezoid" ref="trapezoid">
      <div class="hero-content">
        <div class="welcome-box">
          <p class="welcome">Bienvenido a</p>
          <img src="../assets/images/Isologo.png" alt="TIPSA" class="logo" />
        </div>
        <h1 class="slogan">
          CALIDAD <br />
          INNOVACIÓN <br />
          PRECISIÓN
        </h1>
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank" class="social-icon facebook" aria-label="Facebook">
            <img src="../assets/images/icons/facebook.png" alt="Facebook" class="sr-only" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" class="social-icon linkedin" aria-label="LinkedIn">
            <img src="../assets/images/icons/linkedin.png" alt="linkedin" class="sr-only" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" class="social-icon whatsapp" aria-label="WhatsApp">
            <img src="../assets/images/icons/whatsapp.png" alt="whatsapp" class="sr-only" />
          </a>
        </div>
      </div>
    </div>
    <video autoplay loop muted class="background-video" ref="backgroundVideo">
      <source src="../assets/videos/TIPSA60.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const trapezoid = ref(null);
const backgroundVideo = ref(null);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const triggerPoint = 200; // Ajusta para afinar la transición

  if (trapezoid.value) {
    trapezoid.value.style.transform = `translateX(${-scrollY}px)`;
    trapezoid.value.style.opacity = Math.max(1 - scrollY / triggerPoint, 0);
  }

  if (backgroundVideo.value) {
    backgroundVideo.value.style.transform = `scale(${Math.max(1 - scrollY / 1500, 0.8)})`;
    backgroundVideo.value.style.opacity = Math.max(1 - scrollY / 600, 0);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.trapezoid {
  position: fixed;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background-color: #0077aa;
  clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  z-index: 3;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.hero-content {
  align-items: center;
  justify-content: flex-start;
}

.hero-text {
  background-color: white;
  padding: 2rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.welcome-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -60px;
  margin-top: 50px;
}

.welcome {
  background: white;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 25px;
  display: inline-block;
  text-align: center;
  margin-right: -20px;
  margin-top: 40px;
}

.logo {
  width: 200px;
}

.slogan {
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-size: 5rem;
  line-height: 1;
  letter-spacing: 0.02em;
  margin-bottom: 150px;
}

.social-icons {
  display: flex;
  justify-content: start;
  margin-top: 30px;
  gap: 40px;
}

</style>
